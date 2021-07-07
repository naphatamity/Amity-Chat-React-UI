export function sortByChannelId(a, b): number {
  const channelIdA = a.channelId.toUpperCase(); // ignore upper and lowercase
  const channelIdB = b.channelId.toUpperCase(); // ignore upper and lowercase
  if (channelIdA < channelIdB) {
    return -1;
  }
  if (channelIdA > channelIdB) {
    return 1;
  }
  return 0;
}
