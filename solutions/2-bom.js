// BEGIN
export default function solution(url) {
  const browserAgent = navigator.userAgent;
  const browserDetails = browserAgent.match(/Mozilla\/\d+\.\d+/)[0];
  return `${browserDetails} ${url}`;
}
// END