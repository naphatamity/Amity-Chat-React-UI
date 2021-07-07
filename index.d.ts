declare module '@amityco/js-sdk' {
  export function MessageRepository(): void;
  export function ChannelRepository(): void;
  export function UserRepository(): void;
  export function ReactorRepository(message): void;
  export function MessageEditorRepository(message): void;
  export function MessageFlagRepository(messageId): void;
  export function ChannelMembershipRepository(channelId: string): void;
  function create({ apiKey: string }): void;
  export const ChannelType = {
    Standard,
  };
  export const ASCClient = {
    create: create,
  };
}
