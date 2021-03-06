import React from 'react';

import Btn from '../Btn/Btn';

import './Qoqtail.css';

const Qoqtail = ({ qoqtail, saveQoqtail, user, deleteQoqtail }) => {
	return (
		<div className="Qoqtail">
			<h2 className="Qoqtail-title">{qoqtail.name}</h2>
			<div className="Qoqtail-container">
				<div className="Qoqtail-image">
					<img src={qoqtail.image} alt={qoqtail.name} />
				</div>
				<div className="Qoqtail-ingredients">
					{qoqtail.ingredients.map((ingredient, i) => {
						return ingredient[0] && ingredient[0].length ? (
							<div key={i} className="Qoqtail-ingredient-container">
								<div className="Qoqtail-ingredient">{ingredient[0]}</div>
								{ingredient[1] &&
								ingredient[1].length &&
								ingredient[1] !== '\n' ? (
									<div className="Qoqtail-measure">{ingredient[1]}</div>
								) : null}
							</div>
						) : null;
					})}
				</div>

				<p>{qoqtail.instructions}</p>
				<div className="Qoqtail-glass">Serve: {qoqtail.glass}</div>
				{user.qoqtails &&
				user.qoqtails.length &&
				user.qoqtails.some(e => e.id === qoqtail.id) ? (
					<Btn
						name="Delete"
						cssClass="Qoqtail-button"
						action={() => deleteQoqtail(qoqtail.id)}
					/>
				) : (
					<Btn
						name="Save"
						cssClass="Qoqtail-button"
						action={() => saveQoqtail(qoqtail.id, qoqtail.name)}
					/>
				)}
			</div>
		</div>
	);
};

export default Qoqtail;
