export class ApiConstants {
  static BASE_URL = import.meta.env.VITE_BASE_URL || "";
  static LOGIN = this.BASE_URL.concat("/auth/login/");
  static USERDATA = this.BASE_URL.concat("/auth/userdata/");
  static USERS = this.BASE_URL.concat("/users/");
  static GET_USER_PROGRESS = this.USERS.concat("get-my-progress");

  static REG_REQUESTS = this.BASE_URL.concat("/reg-requests/");
  static GROUPS = this.BASE_URL.concat("/groups/");
  static SUBJECTS = this.BASE_URL.concat("/subjects/");
  static SECTIONS = this.BASE_URL.concat("/sections/");
  static TOPICS = this.BASE_URL.concat("/topics/");
  static TOPIC_CONTENT = (topicId: number) =>
    this.BASE_URL.concat(`/topics/${topicId}/get-content`);
  static LECTURES = this.BASE_URL.concat("/lectures/");
  static CHECK_ANSWER = (answerId: number) =>
    this.BASE_URL.concat(`/answers/${answerId}/check-answer`);
  static SAVE_CUSTOM_ANSWER = (taskId: number) =>
    this.BASE_URL.concat(`/tasks/${taskId}/save-custom-answer`);
}
