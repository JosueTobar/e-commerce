import React from 'react';
export default class categaryItem extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6 text-center">
                <div>
                    <center>
                        <img className="rounded img-category " src={this.props.img} />
                        <p className="text-muted  img-category-text ">{this.props.name}</p>
                    </center>
                </div>
            </div>
        );
    }
}
