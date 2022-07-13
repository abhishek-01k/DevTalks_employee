import classNames from "classnames";
import React from "react";
import styles from "./PlayerCard.module.css";

const PlayerCard = ({ users }) => {

  console.log("USers in player card",users);

  return (
    <div
      className={classNames(
        styles.container,
        " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      )}
    >
      {users.map((user, i) => (
        <div key={i} className="rounded-lg bg-[#ffff] text-center">
          <div className={styles.hotelImage}>
            <img
              className={styles.Image}
              alt="hotel"
              src={user?.picture?.medium}
            />
          </div>
          <div className={classNames(styles.PlayerDetails,"px-4 pt-4")}>
            <p className={classNames(styles.largerText)}>
              Name: {user?.name?.first + user?.name?.last}
            </p>
            <p className={classNames(styles.smallerText)}>
              Age: {user?.dob?.age}
            </p>
            <p className={classNames(styles.smallerText)}>
              Gender: {user?.gender}
            </p>
            <p className={classNames(styles.smallerText)}>
              Email ID: {user?.email.split('@')[0]}
            </p>
            <p className={classNames(styles.smallerText)}>
              Country: {user?.location?.city}, {user?.location?.country}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;
