export function filteredDestination(destinations, querry){
    const{country, continent,  is_open_to_public} = querry
    if(!country&& !continent && is_open_to_public ==undefined){
        return destinations
    }
    return destinations.filter((destination)=>{
        if(country && destination.country.toLowerCase()!=country.toLowerCase()){
            return false
        }
         if(continent && destination.continent.toLowerCase()!=continent.toLowerCase()){
            return false

        }
         if(is_open_to_public !== undefined) {
      const wantsOpen = is_open_to_public.toLowerCase() === "true"
      if (destination.is_open_to_public !== wantsOpen) {
        return false
      }
    }
    return true

    })


}