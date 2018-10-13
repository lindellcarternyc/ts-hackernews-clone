import * as url from 'url'

const getSiteHostname = (siteUrl: string) => {
  let hostname: string | undefined = ''

  if (siteUrl) {
    if (!siteUrl.includes('//')) {
      siteUrl = `http://${siteUrl}`
    }

    hostname = url.parse(siteUrl).hostname
  }

  if ( hostname === undefined ) { return }

  if (hostname.includes('www.')) {
    hostname = hostname.split('www.')[1]
  }

  return hostname
}

export default getSiteHostname