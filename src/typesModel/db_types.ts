export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          created_at: string | null;
          content: string;
          image: string | null;
          user_id: string;
        };
        Insert: {
          id?: string;
          created_at?: string | null;
          content: string;
          image?: string | null;
          user_id?: string;
        };
        Update: {
          id?: string;
          created_at?: string | null;
          content?: string;
          image?: string | null;
          user_id?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          updated_at: string | null;
          user_name: string | null;
          full_name: string | null;
          avatar_url: string | null;
          website: string | null;
        };
        Insert: {
          id: string;
          updated_at?: string | null;
          user_name?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          website?: string | null;
        };
        Update: {
          id?: string;
          updated_at?: string | null;
          user_name?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          website?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
