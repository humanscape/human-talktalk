/* eslint-disable camelcase */

/**
 * Slack API의 사용을 편하게 해주는 네임스페이스
 */
declare namespace SlackAPI {
  /**
   * Slack API - User 타입
   */
  interface User {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: Profile;
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_stranger: boolean;
    updated: number;
    is_app_user: boolean;
    is_invited_user: boolean;
    has_2fa: boolean;
    locale: string;
  }

  /**
   * Slack API - Profile 타입
   */
  interface Profile {
    title: string;
    phone: string;
    skype: string;
    real_name: string;
    real_name_normalized: string;
    display_name: string;
    display_name_normalized: string;
    status_text: string;
    status_emoji: string;
    status_expiration: string;
    avatar_hash: string;
    first_name: string;
    last_name: string;
    email: string;
    image_original: string;
    image_24: string;
    image_32: string;
    image_48: string;
    image_72: string;
    image_192: string;
    image_512: string;
    team: string;
  }
}

/**
 * 휴먼톡톡 Member 타입
 */
declare interface Member {
  id: string;
  name: string;
  avatar: string;
}

/**
 * 휴먼톡톡 Result 타입
 */
declare interface Result {
  id: string;
  createdAt: number;
  payload: ResultPayload;
}

declare interface ResultPayloadItem {
  groupName: string;
  members: Member[];
}

declare type ResultPayload = ResultPayloadItem[];
