interface PostProps {
    title: string
    text: string
    profilePicture?: string;
    username: string
}

interface ProfilePicProps {
    picture?: string
}

export interface post {
    id: number
    title: string
    text: string
    username: string
}

const ProfilePic = (props: ProfilePicProps) => {
    return (
        <div className="bg-indigo-500 w-10 h-10 rounded-full">
            {props.picture ? <img src={props.picture} className="border border-indigo-500 object-contain rounded-full" /> : null}
        </div>
    );
}

const Post = (props: PostProps) => {

    return (
        <div className="flex gap-2 w-4/5">
            <div className="flex flex-col gap-1 items-center">
                <ProfilePic picture={props.profilePicture} />
                <div className="flex flex-grow bg-indigo-500 w-0.5"> </div>
            </div>

            <div className="flex flex-col w-full p-4 border border-indigo-500 rounded hover:border-indigo-400 group">
                <div className="flex justify-between">
                    <div className="text-indigo-500 font-bold group-hover:text-indigo-400"> {props.title} </div>
                    <div className="font-light text-slate-700 hover:text-blue-500"> {props.username} </div>
                </div>
                <hr className="p-1 m-1" />
                <div> {props.text} </div>
            </div>
        </div>
    );
}

export default Post;
