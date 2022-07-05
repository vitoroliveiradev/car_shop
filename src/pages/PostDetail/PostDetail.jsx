import { useParams } from "react-router-dom"
import { IndividualPost } from "../../components/IndividualPost";
import { useFetchDocument } from "../../hooks/useFetchDocument";

export const PostDetail = () => {
  const { id } = useParams();

  const { document: post, error, loading  } = useFetchDocument("posts", id);

  return (
    <div>
      {post && (
        <IndividualPost post={post} />
      )}
    </div>
  )
}