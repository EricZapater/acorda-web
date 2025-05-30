export type CreateUserRequest = {
  name?: string;
  surname?: string;
  phone_number: string;
  email: string;
  username: string;
  password: string;
};
export type UserResponse = {
  id: string;
  name: string;
  surname: string;
  phone_number: string;
  email: string;
  username: string;
  password: string;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
  password_changed_at: string;
};
export type LoginRequest = {
  username: string;
  password: string;
};
export type LoginResponse = {
  user: UserResponse;
  token: string;
  expire: Date;
};

export type GroupRequest = {
  name: string;
};

export type GroupResponse = {
  id: string;
  name: string;
  created_at: string;
};

export interface BreadcrumbItem {
  label: string;
  icon?: string;
  route?: string;
  url?: string;
  target?: string;
}

export type MeetingRequest = {
  group_id: string;
  title: string;
  description: string;
  start_time: string;
  created_by?: string;
};

export type MeetingParticipantRequest = {
  meeting_id: string;
  user_id: string;
};

export type MeetingTopicsRequest = {
  meeting_id: string;
  title: string;
};

export type MeetingTopicAgreementRequest = {
  meeting_topic_id: string;
  title: string;
  created_by: string;
};

export type TopicAgreementResponse = {
  id: string;
  title: string;
  meeting_topic_id: string;
  created_by: string;
  created_at: string;
};

export type TopicResponse = {
  id: string;
  title: string;
  meeting_id: string;
  created_at: string;
  topic_agreements?: TopicAgreementResponse[];
};

export type ParticipantResponse = {
  id: string;
  meeting_id: string;
  user_id: string;
};

export type MeetingResponse = {
  id: string;
  group_id: string;
  title: string;
  description: string;
  start_time: string;
  created_by: string;
  created_at: string;
  participants?: ParticipantResponse[];
  topics?: TopicResponse[];
};

export type MeetingSummaryResponse = {
  id: string;
  group_name?: string;
  title: string;
  start_time: string;
  created_by: string;
  num_topics: number;
  num_participants: number;
  has_agreements: boolean;
};

export type SearchRequest = {
  group_ids: string[];
  text: string;
};

export type SearchResponse = {
  tipus: string;
  id: string;
  text: string;
  link: string;
};
