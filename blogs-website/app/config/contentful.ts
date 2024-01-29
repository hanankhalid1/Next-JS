const contentful = require('contentful')

export const client = contentful.createClient({
  space: 'sy9eadg1czmw',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'nC4pZfaCHZ8HdOhmm5LTc837act8bbyyNfUqr9Cnr3E'
})