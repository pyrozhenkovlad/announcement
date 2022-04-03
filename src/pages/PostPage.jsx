import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import { Row, Col ,Button} from "antd";


const PostPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [data, setData] = useState([]);
	const [access,setAccess] = useState(false)
    const [similarPosts,setSimilarPosts] = useState([]);
    const [show,setShow] = useState(false);
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("data"));
		const postArr = data.filter((el) => el.id === id);
		setAccess(true);
		setPost(...postArr);
		setData(data);
	}, []);

	useEffect(()=>{
	    if(access){
         const similarTitle = compareTitle().map(el=>JSON.stringify(el));
		 const similarDescription = compareDescription().map(el=>JSON.stringify(el));
		 const set = new Set([...similarTitle,...similarDescription])
		 const similarPostList = Array.from(set).map(el=>JSON.parse(el));
		
		if(similarPostList.length>3){
			return setSimilarPosts(()=>{
				return similarPostList.filter((el,index)=>{
					if(index<=2) return true;
					return false;
				})
			})
		}
		setSimilarPosts(similarPostList);
		
		} 
	},[post])


	 const compareTitle = ()=>{
		 const title = post.title.split(' ');
		 return data.filter((el)=>{
			if(el.id === id) {
				return false
			}
             let res = false;
		     title.map(word=>{
				   if(el.title.includes(word)) res = true;
			 })
			return res;
		 })
	 }

	 const compareDescription = ()=>{
		const description = post.description.split(' ');
		return  data.filter((el)=>{
			if(el.id === id) {
				return false
			}
			  let res = false;
			  description.map(word=>{
				  if(el.description.includes(word)) res = true;
			  })
			  return res;
		})
	}
	
	return (
		<>
		 <Header disabled={true} mode ={true} />  
			<center>
				<Announcement data={post} mode={"postPage"} />
				<Button
				onClick={() => {
					setShow(!show)
				}}
				type='primary'
				style={{ width: 150, margin: "0 auto", marginTop: 20 }}
			>  {
				show? <> Close similar posts</> :<> Show similar posts</>
			}
				
			</Button>
			<br/>
			<Row> 

			{show?similarPosts.map(el=><Col span={5} offset={2}> <Announcement data={el} mode={"similar"} /> </Col>):null} 
			</Row> 
			 </center>
		
           
		</>
	);
};
export default PostPage;
