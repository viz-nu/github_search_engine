import UserItem from "./UserItem";
function Users({data}) {

    return  <div style={styles}>
        {
            data.map((ele,index) => {
                return <UserItem a={ele} key={index}/>
            })
        }
    </div>
}
const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}
export default Users
