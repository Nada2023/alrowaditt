export default function changeLanguage(data) {

    console.log("data " , data);
    return {
        type: "SET_LANGUAGE",
        payload: data
    }

}