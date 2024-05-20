import CustomInput from "@/components/CustomInput";
import { useNotification } from "@/hooks/useNotification";
import { IChangePassword } from "@/interfaces/auth";
import { useChangePassword } from "@/queries/userdata";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

export default function ProfilePage() {
  const { isOpen, onOpenChange, onClose, onOpen } = useDisclosure();

  const { showErrorNotification, showSuccessNotification } = useNotification();

  const [passwordData, setPasswordData] = useState<IChangePassword>({
    newPassword: "",
    currentPassword: "",
  });

  const isChangePasswordDisabled =
    passwordData.newPassword.length < 6 ||
    passwordData.currentPassword.length < 6;

  const { mutate: changePassword, isPending: isChangingPassword } =
    useChangePassword({
      onSuccess: () => {
        showSuccessNotification("Пароль успешно изменен");
        onClose();
      },
      onError: () => {
        showErrorNotification("Не удалось изменить пароль");
        onClose();
      },
    });

  const handleChangePassword = () => {
    if (isChangePasswordDisabled) return;

    changePassword(passwordData);

    setPasswordData({ currentPassword: "", newPassword: "" });
  };

  console.log(passwordData);

  return (
    <div className="mt-12">
      <section className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Изменение пароля</h1>
        <form className="flex flex-col gap-3">
          <CustomInput
            label="Текущий пароль"
            placeholder="Введите текущий пароль..."
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                currentPassword: e.target.value,
              })
            }
          />

          <CustomInput
            label="Новый пароль"
            placeholder="Введите новый пароль..."
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                newPassword: e.target.value,
              })
            }
          />

          <Button
            color="primary"
            onPress={onOpen}
            isDisabled={isChangePasswordDisabled}
          >
            Изменить
          </Button>
        </form>
      </section>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Изменение пароля</ModalHeader>

              <ModalBody>Вы уверены, что хотите изменить пароль?</ModalBody>

              <ModalFooter>
                <Button onPress={onClose}>Отмена</Button>
                <Button
                  color="primary"
                  onPress={handleChangePassword}
                  isLoading={isChangingPassword}
                >
                  Подтвердить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
