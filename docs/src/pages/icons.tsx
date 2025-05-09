import { Icons } from '@onwo/icons';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';

export const IconsPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <PageHeadSection
      title="Icons"
      description="A fitted icon library for all your projects"
      breadcrumbs={[{ label: 'Icons', to: '/icons' }]}
    />
    <div class="onwo-format">
      <p>
        This icon set includes essential UI elements for navigation, actions, notifications, and
        content organization. They all fall under the MIT license and can be used as is without
        accreditation.
      </p>
      <p>
        The icon packages needs to be installed separately, if you havent already, run the command:
      </p>
      <pre class="theme-onwo-dark">
        <code>npm install @onwo/icons</code>
      </pre>
    </div>

    <Anatomy
      variants={{
        Default: `import { Icons } from '@onwo/icons';

<Icons.ArrowsLeft />
<Icons.FilesCopy size="lg" class="text-success fill-success/20" />`,
      }}
    />

    <Showcase
      title="Different sizes and styling"
      component={
        <div class="flex justify-between w-full items-center">
          <Icons.FilesCopy size="sm" class="text-error" />
          <Icons.FilesCopy size="md" class="text-lead" />
          <Icons.FilesCopy size="lg" class="text-success fill-success/20" />
          <Icons.FilesCopy size="lg" class="text-accent" />
          <Icons.FilesCopy size="xl" class="text-sand" />
          <Icons.FilesCopy size="xl" class="text-neutron" />
        </div>
      }
      code={`<Icons.FilesCopy size="sm" class="text-error" />
<Icons.FilesCopy size="md" class="text-lead" />
<Icons.FilesCopy size="lg" class="text-success fill-success/20" />
<Icons.FilesCopy size="lg" class="text-accent" />
<Icons.FilesCopy size="xl" class="text-sand" />
<Icons.FilesCopy size="xl" class="text-neutron" />`}
    />

    <Showcase
      title="All icons"
      component={
        <div class="flex flex-wrap gap-4 w-full items-center">
          <Icons.ArrowsBoost size="lg" />
          <Icons.ArrowsBottomLeft size="lg" />
          <Icons.ArrowsBottomRight size="lg" />
          <Icons.ArrowsChevronDownDouble size="lg" />
          <Icons.ArrowsChevronLeftDouble size="lg" />
          <Icons.ArrowsChevronRightDouble size="lg" />
          <Icons.ArrowsChevronUpDouble size="lg" />
          <Icons.ArrowsCrossLines size="lg" />
          <Icons.ArrowsDiagonalsBltr size="lg" />
          <Icons.ArrowsDiagonalsTlbr size="lg" />
          <Icons.ArrowsDown size="lg" />
          <Icons.ArrowsForward size="lg" />
          <Icons.ArrowsLeft size="lg" />
          <Icons.ArrowsLeftCurved size="lg" />
          <Icons.ArrowsLeftShort size="lg" />
          <Icons.ArrowsRefresh size="lg" />
          <Icons.ArrowsRefreshRound size="lg" />
          <Icons.ArrowsRemoveBoost size="lg" />
          <Icons.ArrowsReply size="lg" />
          <Icons.ArrowsRight size="lg" />
          <Icons.ArrowsRightCurved size="lg" />
          <Icons.ArrowsRightShort size="lg" />
          <Icons.ArrowsSorting size="lg" />
          <Icons.ArrowsTopLeft size="lg" />
          <Icons.ArrowsTopRight size="lg" />
          <Icons.ArrowsTransfer size="lg" />
          <Icons.ArrowsUp size="lg" />
          <Icons.ArrowsUpdate size="lg" />
          <Icons.ChartArea size="lg" />
          <Icons.ChartBar size="lg" />
          <Icons.ChartBarVertical size="lg" />
          <Icons.ChartDashboard size="lg" />
          <Icons.ChartFin size="lg" />
          <Icons.ChartLine size="lg" />
          <Icons.ChartPieChart size="lg" />
          <Icons.ChartRelation size="lg" />
          <Icons.ChartRound size="lg" />
          <Icons.ChatChat size="lg" />
          <Icons.ChatComment size="lg" />
          <Icons.ChatCommentAdd size="lg" />
          <Icons.ChatCommentBubble size="lg" />
          <Icons.ChatCommentBubbleAlert size="lg" />
          <Icons.ChatCommentBubbleQuestionMark size="lg" />
          <Icons.ChatCommentRemove size="lg" />
          <Icons.ChatCommentText size="lg" />
          <Icons.ChatDoubleBubble size="lg" />
          <Icons.ChatStatsChat size="lg" />
          <Icons.ControlsChevronDown size="lg" />
          <Icons.ControlsChevronDownSmall size="lg" />
          <Icons.ControlsChevronLeft size="lg" />
          <Icons.ControlsChevronLeftSmall size="lg" />
          <Icons.ControlsChevronRight size="lg" />
          <Icons.ControlsChevronRightSmall size="lg" />
          <Icons.ControlsChevronUp size="lg" />
          <Icons.ControlsChevronUpSmall size="lg" />
          <Icons.ControlsClear size="lg" />
          <Icons.ControlsClose size="lg" />
          <Icons.ControlsCloseSmall size="lg" />
          <Icons.ControlsCollapse size="lg" />
          <Icons.ControlsDiagonalsInsight size="lg" />
          <Icons.ControlsDiagonalsOutsight size="lg" />
          <Icons.ControlsExpand size="lg" />
          <Icons.ControlsExpandAlt size="lg" />
          <Icons.ControlsEye size="lg" />
          <Icons.ControlsEyeCrossed size="lg" />
          <Icons.ControlsFullScreen size="lg" />
          <Icons.ControlsFullScreenOut size="lg" />
          <Icons.ControlsMinus size="lg" />
          <Icons.ControlsPlus size="lg" />
          <Icons.ControlsVerticalDoubleChevron size="lg" />
          <Icons.DevicesBluetooth size="lg" />
          <Icons.DevicesJoystick size="lg" />
          <Icons.DevicesKeyboard size="lg" />
          <Icons.DevicesMac size="lg" />
          <Icons.DevicesMacbook size="lg" />
          <Icons.DevicesMacbookAndIphone size="lg" />
          <Icons.DevicesMouse size="lg" />
          <Icons.DevicesPhone size="lg" />
          <Icons.DevicesSmartphone size="lg" />
          <Icons.DevicesTvBox size="lg" />
          <Icons.FilesAdd size="lg" />
          <Icons.FilesCase size="lg" />
          <Icons.FilesClipboard size="lg" />
          <Icons.FilesClipboardText size="lg" />
          <Icons.FilesCode size="lg" />
          <Icons.FilesCopy size="lg" />
          <Icons.FilesDelete size="lg" />
          <Icons.FilesDraft size="lg" />
          <Icons.FilesExport size="lg" />
          <Icons.FilesExternalLink size="lg" />
          <Icons.FilesFile size="lg" />
          <Icons.FilesFolderClosed size="lg" />
          <Icons.FilesFolderOpen size="lg" />
          <Icons.FilesFolderOpenAlternative size="lg" />
          <Icons.FilesFolderZip size="lg" />
          <Icons.FilesGeneric size="lg" />
          <Icons.FilesGlasses size="lg" />
          <Icons.FilesImport size="lg" />
          <Icons.FilesMagazine size="lg" />
          <Icons.FilesPrint size="lg" />
          <Icons.FilesRemove size="lg" />
          <Icons.FilesSave size="lg" />
          <Icons.FilesScan size="lg" />
          <Icons.FilesShare size="lg" />
          <Icons.FilesSticker size="lg" />
          <Icons.FilesStickers size="lg" />
          <Icons.FilesTable size="lg" />
          <Icons.FilesText size="lg" />
          <Icons.GenericAbout size="lg" />
          <Icons.GenericAlarm size="lg" />
          <Icons.GenericAlarmRound size="lg" />
          <Icons.GenericBet size="lg" />
          <Icons.GenericBetslip size="lg" />
          <Icons.GenericBlock size="lg" />
          <Icons.GenericBookmark size="lg" />
          <Icons.GenericBookmarkAlternative size="lg" />
          <Icons.GenericBrowser size="lg" />
          <Icons.GenericBurgerRegular size="lg" />
          <Icons.GenericBurgerZig size="lg" />
          <Icons.GenericCheckAlternative size="lg" />
          <Icons.GenericCheckRounded size="lg" />
          <Icons.GenericClose size="lg" />
          <Icons.GenericDelete size="lg" />
          <Icons.GenericDislike size="lg" />
          <Icons.GenericDownload size="lg" />
          <Icons.GenericDragHandle size="lg" />
          <Icons.GenericEdit size="lg" />
          <Icons.GenericGlobe size="lg" />
          <Icons.GenericHeart size="lg" />
          <Icons.GenericHelp size="lg" />
          <Icons.GenericHome size="lg" />
          <Icons.GenericIdea size="lg" />
          <Icons.GenericInfo size="lg" />
          <Icons.GenericInfoAlternative size="lg" />
          <Icons.GenericLightningBolt size="lg" />
          <Icons.GenericLike size="lg" />
          <Icons.GenericLink size="lg" />
          <Icons.GenericLogIn size="lg" />
          <Icons.GenericLogOut size="lg" />
          <Icons.GenericLoyalty size="lg" />
          <Icons.GenericMention size="lg" />
          <Icons.GenericMenu size="lg" />
          <Icons.GenericMinus size="lg" />
          <Icons.GenericMultiBet size="lg" />
          <Icons.GenericNews size="lg" />
          <Icons.GenericPartners size="lg" />
          <Icons.GenericPending size="lg" />
          <Icons.GenericPicture size="lg" />
          <Icons.GenericPlus size="lg" />
          <Icons.GenericSearch size="lg" />
          <Icons.GenericSettings size="lg" />
          <Icons.GenericShareAndroid size="lg" />
          <Icons.GenericShareIos size="lg" />
          <Icons.GenericShareIosBig size="lg" />
          <Icons.GenericStar size="lg" />
          <Icons.GenericTag size="lg" />
          <Icons.GenericTicket size="lg" />
          <Icons.GenericTrophy size="lg" />
          <Icons.GenericUpload size="lg" />
          <Icons.GenericUser size="lg" />
          <Icons.GenericUserSwapping size="lg" />
          <Icons.GenericUsers size="lg" />
          <Icons.MailBox size="lg" />
          <Icons.MailEmailStats size="lg" />
          <Icons.MailEnvelope size="lg" />
          <Icons.MailFilter size="lg" />
          <Icons.MailFilterCrossed size="lg" />
          <Icons.MailFlag size="lg" />
          <Icons.MailLink size="lg" />
          <Icons.MailSend size="lg" />
          <Icons.MailSendRight size="lg" />
          <Icons.MapsLocation size="lg" />
          <Icons.MapsMap size="lg" />
          <Icons.MapsMarker size="lg" />
          <Icons.MapsPanorama size="lg" />
          <Icons.MapsPin size="lg" />
          <Icons.MapsPinAdd size="lg" />
          <Icons.MapsPinLocation size="lg" />
          <Icons.MapsWorld size="lg" />
          <Icons.MediaAutoPlay size="lg" />
          <Icons.MediaCss size="lg" />
          <Icons.MediaCsv size="lg" />
          <Icons.MediaExe size="lg" />
          <Icons.MediaFastBack size="lg" />
          <Icons.MediaFastForward size="lg" />
          <Icons.MediaGifAlternative size="lg" />
          <Icons.MediaHeadphones size="lg" />
          <Icons.MediaHtml size="lg" />
          <Icons.MediaJpg size="lg" />
          <Icons.MediaJs size="lg" />
          <Icons.MediaMegaphone size="lg" />
          <Icons.MediaMice size="lg" />
          <Icons.MediaMiceAlternative size="lg" />
          <Icons.MediaMonitor size="lg" />
          <Icons.MediaMp3 size="lg" />
          <Icons.MediaMp4 size="lg" />
          <Icons.MediaMusic size="lg" />
          <Icons.MediaNoVolume size="lg" />
          <Icons.MediaPause size="lg" />
          <Icons.MediaPhoto size="lg" />
          <Icons.MediaPhp size="lg" />
          <Icons.MediaPlay size="lg" />
          <Icons.MediaPng size="lg" />
          <Icons.MediaPpt size="lg" />
          <Icons.MediaPsd size="lg" />
          <Icons.MediaSoundwave size="lg" />
          <Icons.MediaStop size="lg" />
          <Icons.MediaTuner size="lg" />
          <Icons.MediaTunerAlternative size="lg" />
          <Icons.MediaTxt size="lg" />
          <Icons.MediaVideo size="lg" />
          <Icons.MediaVolume size="lg" />
          <Icons.MediaXll size="lg" />
          <Icons.MediaXml size="lg" />
          <Icons.MediaZip size="lg" />
          <Icons.NotificationsActivity size="lg" />
          <Icons.NotificationsAddBell size="lg" />
          <Icons.NotificationsAlert size="lg" />
          <Icons.NotificationsApp size="lg" />
          <Icons.NotificationsBell size="lg" />
          <Icons.NotificationsBellAlarm size="lg" />
          <Icons.NotificationsBellCross size="lg" />
          <Icons.NotificationsBellRinging size="lg" />
          <Icons.NotificationsBellRingingAlternative size="lg" />
          <Icons.NotificationsError size="lg" />
          <Icons.NotificationsNotifications size="lg" />
          <Icons.NotificationsQuestionMark size="lg" />
          <Icons.NotificationsSettings size="lg" />
          <Icons.Other3Dots size="lg" />
          <Icons.Other3DotsHorizontal size="lg" />
          <Icons.Other43Free size="lg" />
          <Icons.Other66Free size="lg" />
          <Icons.OtherClaps size="lg" />
          <Icons.OtherCrown size="lg" />
          <Icons.OtherFlame size="lg" />
          <Icons.OtherFrame size="lg" />
          <Icons.OtherFreebet size="lg" />
          <Icons.OtherId size="lg" />
          <Icons.OtherLifebuoy size="lg" />
          <Icons.OtherLightning size="lg" />
          <Icons.OtherLiveCasino size="lg" />
          <Icons.OtherMoon size="lg" />
          <Icons.OtherPlug size="lg" />
          <Icons.OtherRewards size="lg" />
          <Icons.OtherRocket size="lg" />
          <Icons.OtherSad size="lg" />
          <Icons.OtherSmile size="lg" />
          <Icons.OtherSun size="lg" />
          <Icons.OtherWater size="lg" />
          <Icons.SecurityBetInsurance size="lg" />
          <Icons.SecurityKey size="lg" />
          <Icons.SecurityLock size="lg" />
          <Icons.SecurityMagnet size="lg" />
          <Icons.SecurityPassport size="lg" />
          <Icons.SecurityPassportAlert size="lg" />
          <Icons.SecurityQrCode size="lg" />
          <Icons.SecuritySecurityAttention size="lg" />
          <Icons.SecurityShield size="lg" />
          <Icons.SecurityShieldSecured size="lg" />
          <Icons.SecurityUmbrella size="lg" />
          <Icons.SecurityUnlock size="lg" />
          <Icons.SecurityVerified size="lg" />
          <Icons.SecurityVerifiedFace size="lg" />
          <Icons.ShopBag size="lg" />
          <Icons.ShopBank size="lg" />
          <Icons.ShopBasket size="lg" />
          <Icons.ShopBuyCrypto size="lg" />
          <Icons.ShopCard size="lg" />
          <Icons.ShopCart size="lg" />
          <Icons.ShopCoins size="lg" />
          <Icons.ShopCrypto size="lg" />
          <Icons.ShopCryptoCoin size="lg" />
          <Icons.ShopWallet size="lg" />
          <Icons.ShopWirelessPay size="lg" />
          <Icons.SoftwareBug size="lg" />
          <Icons.SoftwareClear size="lg" />
          <Icons.SoftwareCode size="lg" />
          <Icons.SoftwareCursor size="lg" />
          <Icons.SoftwareDashboard size="lg" />
          <Icons.SoftwareData size="lg" />
          <Icons.SoftwareDownload size="lg" />
          <Icons.SoftwareHand size="lg" />
          <Icons.SoftwareLogOut size="lg" />
          <Icons.SoftwareLogin size="lg" />
          <Icons.SoftwareNut size="lg" />
          <Icons.SoftwarePlate size="lg" />
          <Icons.SoftwarePuzzle size="lg" />
          <Icons.SoftwareSettings size="lg" />
          <Icons.SoftwareShutdown size="lg" />
          <Icons.SoftwareSorting size="lg" />
          <Icons.SoftwareTurnOff size="lg" />
          <Icons.SoftwareWrench size="lg" />
          <Icons.SportAmericanFootball size="lg" />
          <Icons.SportArchery size="lg" />
          <Icons.SportAthletics size="lg" />
          <Icons.SportAudl size="lg" />
          <Icons.SportBadminton size="lg" />
          <Icons.SportBaseball size="lg" />
          <Icons.SportBasketball size="lg" />
          <Icons.SportBeachVolleyball size="lg" />
          <Icons.SportBiathlon size="lg" />
          <Icons.SportBombay size="lg" />
          <Icons.SportBowls size="lg" />
          <Icons.SportBoxing size="lg" />
          <Icons.SportCallOfDuty size="lg" />
          <Icons.SportCanoeing size="lg" />
          <Icons.SportCarRacing size="lg" />
          <Icons.SportCasino size="lg" />
          <Icons.SportChess size="lg" />
          <Icons.SportCricket size="lg" />
          <Icons.SportCrossCountry size="lg" />
          <Icons.SportCurling size="lg" />
          <Icons.SportCycling size="lg" />
          <Icons.SportDarts size="lg" />
          <Icons.SportDiving size="lg" />
          <Icons.SportDota2 size="lg" />
          <Icons.SportEquestrian size="lg" />
          <Icons.SportEsportGeneric size="lg" />
          <Icons.SportFeatured size="lg" />
          <Icons.SportFencing size="lg" />
          <Icons.SportFieldHockey size="lg" />
          <Icons.SportFloorball size="lg" />
          <Icons.SportFormula1 size="lg" />
          <Icons.SportFormulaE size="lg" />
          <Icons.SportFutsal size="lg" />
          <Icons.SportGaelicHurling size="lg" />
          <Icons.SportGolf size="lg" />
          <Icons.SportGreyhound size="lg" />
          <Icons.SportGymnastics size="lg" />
          <Icons.SportHandball size="lg" />
          <Icons.SportHarness size="lg" />
          <Icons.SportHorseRacing size="lg" />
          <Icons.SportIceHockey size="lg" />
          <Icons.SportIndyRacing size="lg" />
          <Icons.SportJudo size="lg" />
          <Icons.SportKabaddi size="lg" />
          <Icons.SportKingOfGlory size="lg" />
          <Icons.SportLacrosse size="lg" />
          <Icons.SportMma size="lg" />
          <Icons.SportMotor size="lg" />
          <Icons.SportMotorcycleRacing size="lg" />
          <Icons.SportNordicCombined size="lg" />
          <Icons.SportOlympics size="lg" />
          <Icons.SportOverwatch size="lg" />
          <Icons.SportRainbowSix size="lg" />
          <Icons.SportRocketLeague size="lg" />
          <Icons.SportRowing size="lg" />
          <Icons.SportRugby size="lg" />
          <Icons.SportSailing size="lg" />
          <Icons.SportSetTennis size="lg" />
          <Icons.SportSkateboarding size="lg" />
          <Icons.SportSkiJumping size="lg" />
          <Icons.SportSnooker size="lg" />
          <Icons.SportSoccer size="lg" />
          <Icons.SportSpecialSports size="lg" />
          <Icons.SportSpecials size="lg" />
          <Icons.SportSpeedway size="lg" />
          <Icons.SportSportsbet size="lg" />
          <Icons.SportSquash size="lg" />
          <Icons.SportSurfing size="lg" />
          <Icons.SportSwimming size="lg" />
          <Icons.SportTableTennis size="lg" />
          <Icons.SportTennis size="lg" />
          <Icons.SportTriathlon size="lg" />
          <Icons.SportVolleyball size="lg" />
          <Icons.SportWaterpolo size="lg" />
          <Icons.SportWeightlifting size="lg" />
          <Icons.SportWrestling size="lg" />
          <Icons.TextAncor size="lg" />
          <Icons.TextAttach size="lg" />
          <Icons.TextBold size="lg" />
          <Icons.TextBulletsList size="lg" />
          <Icons.TextCards size="lg" />
          <Icons.TextCenter size="lg" />
          <Icons.TextClearFormatting size="lg" />
          <Icons.TextCut size="lg" />
          <Icons.TextHashtag size="lg" />
          <Icons.TextIncreaseIndent size="lg" />
          <Icons.TextInsertLine size="lg" />
          <Icons.TextItalic size="lg" />
          <Icons.TextLeftAlign size="lg" />
          <Icons.TextListView size="lg" />
          <Icons.TextMarker size="lg" />
          <Icons.TextMath size="lg" />
          <Icons.TextNumbersList size="lg" />
          <Icons.TextRightAlign size="lg" />
          <Icons.TextSize size="lg" />
          <Icons.TextStrikethrough size="lg" />
          <Icons.TextStyle size="lg" />
          <Icons.TextTable size="lg" />
          <Icons.TextTableAlternative size="lg" />
          <Icons.TextUnderline size="lg" />
          <Icons.TimeAlarm size="lg" />
          <Icons.TimeCalendar size="lg" />
          <Icons.TimeCalendarAdd size="lg" />
          <Icons.TimeCalendarAlternative size="lg" />
          <Icons.TimeCalendarDate size="lg" />
          <Icons.TimeCalendarRemove size="lg" />
          <Icons.TimeCalendarSuccess size="lg" />
          <Icons.TimeClock size="lg" />
          <Icons.TimeSandglass size="lg" />
          <Icons.TimeStopwatch size="lg" />
          <Icons.TimeStopwatchTimer size="lg" />
          <Icons.TimeTime size="lg" />
          <Icons.TimeWatch size="lg" />
          <Icons.TravelAirplane size="lg" />
          <Icons.TravelAirplaneDown size="lg" />
          <Icons.TravelAirplaneUp size="lg" />
          <Icons.TravelBeachChair size="lg" />
          <Icons.TravelBed size="lg" />
          <Icons.TravelBill size="lg" />
          <Icons.TravelHotel size="lg" />
          <Icons.TravelLuggage size="lg" />
          <Icons.TravelMeal size="lg" />
          <Icons.TravelNoSuitcase size="lg" />
          <Icons.TravelPassport size="lg" />
          <Icons.TravelPlug size="lg" />
          <Icons.TravelRest size="lg" />
          <Icons.TravelRoom size="lg" />
          <Icons.TravelSeats size="lg" />
          <Icons.TravelSuitcase size="lg" />
          <Icons.TravelSwimmingPool size="lg" />
          <Icons.TravelYacht size="lg" />
        </div>
      }
    />
  </div>
);
