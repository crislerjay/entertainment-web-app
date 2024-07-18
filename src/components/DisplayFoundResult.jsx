import { useParams } from "react-router-dom";

export default function DisplayFoundResult({fetchState}) {
  let { slug } = useParams();

  return (
    <section>
      <h1 className='heading-l'>{`Found ${fetchState.totalResults} results for ${slug}`}</h1>
    </section>
  )
}
