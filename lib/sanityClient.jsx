import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'iu2k0910',
    dataset: 'production',
    token: 'skoCWE2Tl7hdaQbG26vHfD4Lbu0SE8n4zPbaLkFfUU7fP15mV99uto7wWZGBsUx6KWIachYjpMdZ9ajBUw6F3txPqoN3u7sihqZYIAaCYK1uSAvMpDKUDLIrxQo0DQlvwx1I9kAO3lCXvvR5tJUGMYS7KpEkSKOLOOot1vNyIk68of2YfSS3',
    apiVersion: '2022-03-14',
    useCdn: false,
})