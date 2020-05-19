import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser, logout } from '../../features/authSlice';
import { ICreator } from '../../interfaces/models';
import { AiOutlineLogout } from 'react-icons/ai';
import { getCurrentLocale, setLocale } from '../../features/appSlice';

const languages = ['en', 'fr']

interface ITopbarProps {
}

const Topbar: React.FunctionComponent<ITopbarProps> = (props) => {
  const dispatch = useDispatch();
  const currentUser: ICreator = useSelector(getCurrentUser);
  const currentLocale: string = useSelector(getCurrentLocale);
  return (
    <div className="topbar d-flex justify-content-end">
      <div className="mr-2">
        <p>{currentUser.user_name}</p>
      </div>
      <div className="mr-2">
        <select onChange={(e) => dispatch(setLocale(e.target.value))} value={currentLocale}>
          {
            languages.map((locale) => (
              <option key={locale} value={locale}>{locale}</option>
            ))
          }
        </select>
      </div>
      <div className="mr-2 pointed">
        <AiOutlineLogout size="20px" onClick={() => dispatch(logout(null))} color="firebrick" />
      </div>
    </div>
  );
};

export default Topbar;
