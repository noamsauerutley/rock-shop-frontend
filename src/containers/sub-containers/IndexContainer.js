import React from 'react';
import RockCard from '../../components/RockCard'

class IndexContainer extends React.Component {
    
    render(){
        
        const displayRocks = this.props.allRocks.map(rock => <RockCard key={rock.id} rock={rock} />)

        return (
            <div className="ui four column grid">
                <div className="row">
                    {displayRocks}
                </div>
            </div>

        )
    }
}

export default IndexContainer
