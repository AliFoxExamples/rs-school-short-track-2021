/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((el) => {
    const strDomain = el.split('.').reverse();
    const code = `.${strDomain[0]}`;
    const adress = `${code}.${strDomain[1]}`;
    const fullAdress = `.${strDomain.join('.')}`;
    obj[code] = code in obj ? obj[code] + 1 : 1;
    obj[adress] = adress in obj ? obj[adress] + 1 : 1;
    obj[fullAdress] = fullAdress in obj ? obj[fullAdress] : 1;
  });
  return obj;
}

module.exports = getDNSStats;
