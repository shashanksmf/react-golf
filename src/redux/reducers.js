import Auth from './auth/reducer';
import App from './app/reducer';
import Mails from './mail/reducer';
import Calendar from './calendar/reducer';
import Box from './box/reducer';
import Notes from './notes/reducer';
import Todos from './todos/reducer';
import Contacts from './contacts/reducer';
import Cards from './card/reducer';
import Chat from './chat/reducers';
import DynamicChartComponent from './dynamicEchart/reducer';
import Ecommerce from './ecommerce/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import Invoices from './invoice/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import YoutubeSearch from './youtubeSearch/reducers';
import DevReducers from '../customApp/redux/reducers';
import Articles from './articles/reducers';
import Investors from './investors/reducers';

import Overview from './overview/reducers';
import Community from './community/reducers';
import StrokesGained from './StrokesGained/reducers';
import Putting from './Putting/reducers';
import Trends from './Trends/reducers';
import Setting from './settingTwo/reducers';
import Profile from './Profile/saga';
import Friends from './Friends/saga';
import Rounds from './Rounds/saga';

export default {
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Mails,
  Calendar,
  Box,
  Notes,
  Todos,
  Contacts,
  Cards,
  Chat,
  DynamicChartComponent,
  Ecommerce,
  Invoices,
  YoutubeSearch,
  Articles,
  Investors,
  Overview,
  Community,
  StrokesGained,
  Putting,
  Trends,
  Setting,
  Profile,
  Friends,
  Rounds,
  ...DevReducers,
};
