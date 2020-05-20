import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import {RtmpView} from 'react-native-rtmpview';
import ViewShot from 'react-native-view-shot';

const RTPM_URL_1 =
  'rtmp://livechina-pull-c000.videobase.com.cn/livechina/cntv34-ts01?auth_key=1836526433-0-0-2193c8a9fd2ad476c6ddda68fabfa259';
const RTPM_URL_2 =
  'rtmp://livechina-pull-c000.videobase.com.cn/livechina/cntv36-ts03?auth_key=1836526433-0-0-78b8aacd61675d07b44359eea7633fcb';

export default class TestVideo extends React.Component {
  handlePlaybackState = (data) => {};

  handleFirstVideoFrameRendered = (data) => {};

  componentDidMount() {
    this.player_1.initialize();
    this.player_2.initialize();
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={{height: 100, width: 100, backgroundColor: '#999'}}
        onPress={ async () => {
          try {
            const data = await this.viewShots_1.capture()
            console.log('saul --------------', data)

          } catch(err) {
            console.log('shotErr', err)
          }

        }}
        >
          <Text>截图</Text>
        </TouchableOpacity>
        <ViewShot
          ref={(ref) => {
            this.viewShots_1 = ref;
          }}
          options={{
            format: 'jpg',
            quality: 0.5,
            result: 'tmpfile',
            width: 180,
            height: 90,
          }}
            style={{
              height: 200,
              width: 375,
            }}>
          <RtmpView
            style={{
              height: 200,
              width: 375,
            }}
            shouldMute={true}
            ref={(e) => {
              this.player_1 = e;
            }}
            // onPlaybackState={(data) => {
            //   this.handlePlaybackState(data);
            // }}
            // onFirstVideoFrameRendered={(data) => {
            //   this.handleFirstVideoFrameRendered(data);
            // }}
            url={RTPM_URL_1}
          />
        </ViewShot>
        <RtmpView
          style={{
            height: 200,
            width: 375,
          }}
          shouldMute={true}
          ref={(e) => {
            this.player_2 = e;
          }}
          // onPlaybackState={(data) => {
          //   this.handlePlaybackState(data);
          // }}
          // onFirstVideoFrameRendered={(data) => {
          //   this.handleFirstVideoFrameRendered(data);
          // }}
          url={RTPM_URL_2}
        />
      </View>
    );
  }
}
