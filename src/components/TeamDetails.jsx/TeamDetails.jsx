import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import styles from "./TeamDetails.module.css";

const TeamDetails = ({users}) => {
    return (
        <div className={classNames(styles.teamDetailContainer,'w-7/12 md:w-9/12 mt-8 mx-4')}>
            <PlayerCard users={users}/>
        </div>
    );
};

export default TeamDetails;