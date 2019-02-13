import React from 'react';
import { DataViewContainer } from './DataViewContainer';
import nba from 'nba'
import { Profile } from './Profile';
import {SearchBar} from "./SearchBar";
import { DEFAULT_PLAYER_INFO} from  '../constants';


export class Main extends React.Component {
    state = {
        // Object with ID, info, and abbrev
        playerInfo: DEFAULT_PLAYER_INFO,

    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }

    loadPlayerInfo = (playerName) => {
        const playerId = nba.findPlayer(playerName).playerId;
        //api call
        nba.stats.playerInfo({ PlayerID: playerId })
            .then((info) => {
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                this.setState({ playerInfo });
            }).catch((e) => {
                console.log(e);
        });
    }

    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>

            </div>
        );
    }
}
