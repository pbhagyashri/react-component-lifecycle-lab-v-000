import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  componentWillReceiveProps(nextProps) {
    debugger
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.tweets.includes(nextProps.newTweets));
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
