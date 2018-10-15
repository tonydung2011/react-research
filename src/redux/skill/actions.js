import firebase from 'firebase'
import 'firebase/firestore'

const getSkillsList = () => dispatch => new Promise((resolve) => {
    const db = firebase.firestore()
    db.settings({
        timestampsInSnapshots: true
    })
    return db.collection('skills').get()
        .then((snapshot) => {
            const data = []
            snapshot.forEach(doc => data.push({
                id: doc.id,
                ...doc.data(),
            }))
            dispatch({
                type: 'GET_SKILL_LIST',
                data
            })
        })
})

export {
    getSkillsList,
}
