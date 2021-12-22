import CollectionCard from "../CollectionCard/CollectionCard"
import "./PunkList.css"

function PunkList({ punkListData = [] }) {
  return (
    <div className='punkList'>
      {punkListData.map((punk) => (
        <div key={punk.token_id}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            image={punk.image_original_url}
            traits={punk.traits}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList
