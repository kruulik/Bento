import React from 'react';

class Appreciate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonState: 'like'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // e.preventDefault();
    const { project_id, user, likeProject, unlikeProject } = this.props;
    const user_id = user.id;
    let like = {project_id, user_id };
    let { buttonState } = this.state;
    if (buttonState === 'like') {
      likeProject(like);
      this.setState({
        buttonState: 'thanks'
      });
    }
  }

  componentDidMount(){
    const { project_id, user, type } = this.props;
    if (user.likes.includes(project_id)){
      this.setState({ buttonState: 'thanks'});
    }
  }

  render () {
    const { project_id, user, type } = this.props;



    let { buttonState } = this.state;
    let buttonType;



    if (type === 'a') {
      buttonType = (
      <div className={'button__container ' + buttonState} onClick={this.handleClick}>
        <div className="form-button">
          <span className="button__label">{buttonState === 'like' ? 'Appreciate Project' : 'Thank You!'}</span>
        </div>
      </div>
    );
    } else if (type === 'b') {
      buttonType = (
      <div className={'badge__container ' + buttonState}>
        <div className="form-button">
          <span className="badge__label">{buttonState === 'like' ? 'Appreciate Project' : 'Thank You!'}</span>
        </div>
        <div className="badge-tooltip">

        </div>
      </div>
    );
    }

    return (
      <div className="appreciation">
        { buttonType }
      </div>
    );

  }
}

export default Appreciate;
