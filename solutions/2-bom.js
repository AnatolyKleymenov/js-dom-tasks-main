// BEGIN
export default function solution(url) {
  window.location.href = url;
  return `${navigator.appCodeName}/${navigator.appVersion} ${window.location.href}`;
}
// END