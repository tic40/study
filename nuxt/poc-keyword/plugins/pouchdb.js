import PouchDB from 'pouchdb'

export default (_, inject) => {
  const db = new PouchDB('http://192.168.1.77:5984/keywords')
  inject('db', db)
}
