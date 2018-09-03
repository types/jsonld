import * as jsonld from 'jsonld';

jsonld.expand(
  {
    '@context': 'http://schema.org/',
    '@type': 'Person',
    'name': 'Jane Doe',
    'jobTitle': 'Professor',
    'telephone': '(425) 123-4567',
    'url': 'http://www.janedoe.com'
  },
  (_, res) => {
    console.log(JSON.stringify(res, null, 2));

    return jsonld.compact(res, 'http://schema.org/', (_, res) => {
      console.log(JSON.stringify(res, null, 2));
    });
  }
);
