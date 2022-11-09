import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function RedirectComp({ to }) {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(to);
	}, [to]);

	return null;
}
export default RedirectComp;