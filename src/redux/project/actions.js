import firebase from 'firebase'
import 'firebase/firestore'

const getProjectList = () => dispatch => new Promise((resolve) => {
    const db = firebase.firestore()
    db.settings({
        timestampsInSnapshots: true
    })
    return db.collection('projects').get()
        .then((snapshot) => {
            const data = []
            snapshot.forEach(doc => data.push({
                id: doc.id,
                ...doc.data(),
            }))
            dispatch({
                type: 'GET_PROJECT_LIST',
                data
            })
        })
})

export {
    getProjectList,
}
