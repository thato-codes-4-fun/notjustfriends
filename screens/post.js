import Header from "../components/post/Header"
import BodyPost from "../components/post/Body"
import Footer from "../components/post/Footer"

export default function PostScreen({post}){
    let {User, id, createdAt, description, image, numberOfLikes, numberOfShares} = post;
    return (
        <>
             {/* header */}
            <Header name={User.name} image={User.image} createdAt={createdAt}/>
                {/* body */}
            <BodyPost description={description} image={image}/>
                {/* footer */}
            <Footer numberOfLikes={numberOfLikes} numberOfShares={numberOfShares}/>
        </>
               
    )
}