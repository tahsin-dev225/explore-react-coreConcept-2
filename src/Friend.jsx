export default function Friend({friend}){
    const box ={
        padding:'5px',
        margin:'5px',
        border:'2px solid gray',
        borderRadius:'10px'
    }
    const {name, email} =friend;
    return (
        <div style={box}>
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
        </div>
    )
}