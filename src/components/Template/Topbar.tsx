import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser, logout } from '../../features/authSlice';
import { ICreator } from '../../interfaces/models';
import { AiOutlineLogout } from 'react-icons/ai';
import { getCurrentLocale, setLocale } from '../../features/appSlice';
import FlatSelect from '../Form/FlatSelect';
import WixarLogo from '../svgs/WixarLogo';

//@ts-ignore
import colors from '../../assets/styles/colors.scss';
import { useTranslation } from 'react-i18next';

const languages = [{label: 'English', value: 'en'}, {label: 'Français', value: 'fr'}]

interface ITopbarProps {
}

const Topbar: React.FunctionComponent<ITopbarProps> = (props) => {
  const dispatch = useDispatch();
  const currentUser: ICreator = useSelector(getCurrentUser);
  const currentLocale: string = useSelector(getCurrentLocale);
  const { t } = useTranslation();
  return (
    <div className="topbar d-flex justify-content-end">
      <div className="ml-1 mr-auto">
        <WixarLogo />
      </div>
      <div className="mr-3 mt-2">
        <p>{currentUser.user_name}</p>
      </div>
      <div data-tip={t('topbar.locales')} className="mr-3 mt-2">
        <FlatSelect
          value={currentLocale}
          onChange={(value) => dispatch(setLocale(value))}
          options={languages}
        />
      </div>
      <div data-tip={t('topbar.logout')} className="mr-3 mt-2 pointed">
        <AiOutlineLogout size="25px" onClick={() => dispatch(logout(null))} color={colors.red} />
      </div>
    </div>
  );
};

export default Topbar;
