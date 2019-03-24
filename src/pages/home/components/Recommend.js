import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <RecommendWrapper>
                {
                    list.map((item)=>{
                        return(
                            <div key={item.get('id')}>
                                <RecommendItem imgUrl={item.get('imgUrl')} />
                            </div>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState)(Recommend);