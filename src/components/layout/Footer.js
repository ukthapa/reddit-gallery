import React from 'react'
import Box from '@material-ui/core/Box';

const footerBgColor = {
	bgcolor: '#596fe8',
	color: '#ffffff',
	fontSize: '.8rem'
};


function Footer() {
	return (
		<footer>
			<Box px={3} py={2} {...footerBgColor}>
				<div className="copyright-info">
					&copy; { new Date().getFullYear() }
					<span>, Reddit Gallery </span>
				</div>
			</Box>
		</footer>
	)
}

export default Footer
