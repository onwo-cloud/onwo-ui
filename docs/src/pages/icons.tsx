import * as AllIcons from '@onwo/icons';
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
        Default: `import { ArrowsLeftIcon, FilesCopyIcon } from '@onwo/icons';

<ArrowsLeftIcon />
<FilesCopyIcon size="lg" class="text-success fill-success/20" />`,
      }}
    />

    <Showcase
      title="Different sizes and styling"
      component={
        <div class="flex justify-between w-full items-center">
          <AllIcons.FilesCopyIcon size="sm" class="text-error" />
          <AllIcons.FilesCopyIcon size="md" class="text-lead" />
          <AllIcons.FilesCopyIcon size="lg" class="text-success fill-success/20" />
          <AllIcons.FilesCopyIcon size="lg" class="text-accent" />
          <AllIcons.FilesCopyIcon size="xl" class="text-sand" />
          <AllIcons.FilesCopyIcon size="xl" class="text-neutron" />
        </div>
      }
      code={`<AllIcons.FilesCopyIcon size="sm" class="text-error" />
<AllIcons.FilesCopyIcon size="md" class="text-lead" />
<AllIcons.FilesCopyIcon size="lg" class="text-success fill-success/20" />
<AllIcons.FilesCopyIcon size="lg" class="text-accent" />
<AllIcons.FilesCopyIcon size="xl" class="text-sand" />
<AllIcons.FilesCopyIcon size="xl" class="text-neutron" />`}
    />

    <Showcase
      title="All icons"
      component={
        <div class="flex flex-wrap gap-4 w-full items-center">
          <AllIcons.ArrowsBoostIcon size="lg" />
          <AllIcons.ArrowsBottomLeftIcon size="lg" />
          <AllIcons.ArrowsBottomRightIcon size="lg" />
          <AllIcons.ArrowsChevronDownDoubleIcon size="lg" />
          <AllIcons.ArrowsChevronLeftDoubleIcon size="lg" />
          <AllIcons.ArrowsChevronRightDoubleIcon size="lg" />
          <AllIcons.ArrowsChevronUpDoubleIcon size="lg" />
          <AllIcons.ArrowsCrossLinesIcon size="lg" />
          <AllIcons.ArrowsDiagonalsBltrIcon size="lg" />
          <AllIcons.ArrowsDiagonalsTlbrIcon size="lg" />
          <AllIcons.ArrowsDownIcon size="lg" />
          <AllIcons.ArrowsForwardIcon size="lg" />
          <AllIcons.ArrowsLeftIcon size="lg" />
          <AllIcons.ArrowsLeftCurvedIcon size="lg" />
          <AllIcons.ArrowsLeftShortIcon size="lg" />
          <AllIcons.ArrowsRefreshIcon size="lg" />
          <AllIcons.ArrowsRefreshRoundIcon size="lg" />
          <AllIcons.ArrowsRemoveBoostIcon size="lg" />
          <AllIcons.ArrowsReplyIcon size="lg" />
          <AllIcons.ArrowsRightIcon size="lg" />
          <AllIcons.ArrowsRightCurvedIcon size="lg" />
          <AllIcons.ArrowsRightShortIcon size="lg" />
          <AllIcons.ArrowsSortingIcon size="lg" />
          <AllIcons.ArrowsTopLeftIcon size="lg" />
          <AllIcons.ArrowsTopRightIcon size="lg" />
          <AllIcons.ArrowsTransferIcon size="lg" />
          <AllIcons.ArrowsUpIcon size="lg" />
          <AllIcons.ArrowsUpdateIcon size="lg" />
          <AllIcons.ChartAreaIcon size="lg" />
          <AllIcons.ChartBarIcon size="lg" />
          <AllIcons.ChartBarVerticalIcon size="lg" />
          <AllIcons.ChartDashboardIcon size="lg" />
          <AllIcons.ChartFinIcon size="lg" />
          <AllIcons.ChartLineIcon size="lg" />
          <AllIcons.ChartPieChartIcon size="lg" />
          <AllIcons.ChartRelationIcon size="lg" />
          <AllIcons.ChartRoundIcon size="lg" />
          <AllIcons.ChatChatIcon size="lg" />
          <AllIcons.ChatCommentIcon size="lg" />
          <AllIcons.ChatCommentAddIcon size="lg" />
          <AllIcons.ChatCommentBubbleIcon size="lg" />
          <AllIcons.ChatCommentBubbleAlertIcon size="lg" />
          <AllIcons.ChatCommentBubbleQuestionMarkIcon size="lg" />
          <AllIcons.ChatCommentRemoveIcon size="lg" />
          <AllIcons.ChatCommentTextIcon size="lg" />
          <AllIcons.ChatDoubleBubbleIcon size="lg" />
          <AllIcons.ChatStatsChatIcon size="lg" />
          <AllIcons.ControlsChevronDownIcon size="lg" />
          <AllIcons.ControlsChevronDownSmallIcon size="lg" />
          <AllIcons.ControlsChevronLeftIcon size="lg" />
          <AllIcons.ControlsChevronLeftSmallIcon size="lg" />
          <AllIcons.ControlsChevronRightIcon size="lg" />
          <AllIcons.ControlsChevronRightSmallIcon size="lg" />
          <AllIcons.ControlsChevronUpIcon size="lg" />
          <AllIcons.ControlsChevronUpSmallIcon size="lg" />
          <AllIcons.ControlsClearIcon size="lg" />
          <AllIcons.ControlsCloseIcon size="lg" />
          <AllIcons.ControlsCloseSmallIcon size="lg" />
          <AllIcons.ControlsCollapseIcon size="lg" />
          <AllIcons.ControlsDiagonalsInsightIcon size="lg" />
          <AllIcons.ControlsDiagonalsOutsightIcon size="lg" />
          <AllIcons.ControlsExpandIcon size="lg" />
          <AllIcons.ControlsExpandAltIcon size="lg" />
          <AllIcons.ControlsEyeIcon size="lg" />
          <AllIcons.ControlsEyeCrossedIcon size="lg" />
          <AllIcons.ControlsFullScreenIcon size="lg" />
          <AllIcons.ControlsFullScreenOutIcon size="lg" />
          <AllIcons.ControlsMinusIcon size="lg" />
          <AllIcons.ControlsPlusIcon size="lg" />
          <AllIcons.ControlsVerticalDoubleChevronIcon size="lg" />
          <AllIcons.DevicesBluetoothIcon size="lg" />
          <AllIcons.DevicesJoystickIcon size="lg" />
          <AllIcons.DevicesKeyboardIcon size="lg" />
          <AllIcons.DevicesMacIcon size="lg" />
          <AllIcons.DevicesMacbookIcon size="lg" />
          <AllIcons.DevicesMacbookAndIphoneIcon size="lg" />
          <AllIcons.DevicesMouseIcon size="lg" />
          <AllIcons.DevicesPhoneIcon size="lg" />
          <AllIcons.DevicesSmartphoneIcon size="lg" />
          <AllIcons.DevicesTvBoxIcon size="lg" />
          <AllIcons.FilesAddIcon size="lg" />
          <AllIcons.FilesCaseIcon size="lg" />
          <AllIcons.FilesClipboardIcon size="lg" />
          <AllIcons.FilesClipboardTextIcon size="lg" />
          <AllIcons.FilesCodeIcon size="lg" />
          <AllIcons.FilesCopyIcon size="lg" />
          <AllIcons.FilesDeleteIcon size="lg" />
          <AllIcons.FilesDraftIcon size="lg" />
          <AllIcons.FilesExportIcon size="lg" />
          <AllIcons.FilesExternalLinkIcon size="lg" />
          <AllIcons.FilesFileIcon size="lg" />
          <AllIcons.FilesFolderClosedIcon size="lg" />
          <AllIcons.FilesFolderOpenIcon size="lg" />
          <AllIcons.FilesFolderOpenAlternativeIcon size="lg" />
          <AllIcons.FilesFolderZipIcon size="lg" />
          <AllIcons.FilesGenericIcon size="lg" />
          <AllIcons.FilesGlassesIcon size="lg" />
          <AllIcons.FilesImportIcon size="lg" />
          <AllIcons.FilesMagazineIcon size="lg" />
          <AllIcons.FilesPrintIcon size="lg" />
          <AllIcons.FilesRemoveIcon size="lg" />
          <AllIcons.FilesSaveIcon size="lg" />
          <AllIcons.FilesScanIcon size="lg" />
          <AllIcons.FilesShareIcon size="lg" />
          <AllIcons.FilesStickerIcon size="lg" />
          <AllIcons.FilesStickersIcon size="lg" />
          <AllIcons.FilesTableIcon size="lg" />
          <AllIcons.FilesTextIcon size="lg" />
          <AllIcons.GenericAboutIcon size="lg" />
          <AllIcons.GenericAlarmIcon size="lg" />
          <AllIcons.GenericAlarmRoundIcon size="lg" />
          <AllIcons.GenericBetIcon size="lg" />
          <AllIcons.GenericBetslipIcon size="lg" />
          <AllIcons.GenericBlockIcon size="lg" />
          <AllIcons.GenericBookmarkIcon size="lg" />
          <AllIcons.GenericBookmarkAlternativeIcon size="lg" />
          <AllIcons.GenericBrowserIcon size="lg" />
          <AllIcons.GenericBurgerRegularIcon size="lg" />
          <AllIcons.GenericBurgerZigIcon size="lg" />
          <AllIcons.GenericCheckAlternativeIcon size="lg" />
          <AllIcons.GenericCheckRoundedIcon size="lg" />
          <AllIcons.GenericCloseIcon size="lg" />
          <AllIcons.GenericDeleteIcon size="lg" />
          <AllIcons.GenericDislikeIcon size="lg" />
          <AllIcons.GenericDownloadIcon size="lg" />
          <AllIcons.GenericDragHandleIcon size="lg" />
          <AllIcons.GenericEditIcon size="lg" />
          <AllIcons.GenericGlobeIcon size="lg" />
          <AllIcons.GenericHeartIcon size="lg" />
          <AllIcons.GenericHelpIcon size="lg" />
          <AllIcons.GenericHomeIcon size="lg" />
          <AllIcons.GenericIdeaIcon size="lg" />
          <AllIcons.GenericInfoIcon size="lg" />
          <AllIcons.GenericInfoAlternativeIcon size="lg" />
          <AllIcons.GenericLightningBoltIcon size="lg" />
          <AllIcons.GenericLikeIcon size="lg" />
          <AllIcons.GenericLinkIcon size="lg" />
          <AllIcons.GenericLogInIcon size="lg" />
          <AllIcons.GenericLogOutIcon size="lg" />
          <AllIcons.GenericLoyaltyIcon size="lg" />
          <AllIcons.GenericMentionIcon size="lg" />
          <AllIcons.GenericMenuIcon size="lg" />
          <AllIcons.GenericMinusIcon size="lg" />
          <AllIcons.GenericMultiBetIcon size="lg" />
          <AllIcons.GenericNewsIcon size="lg" />
          <AllIcons.GenericPartnersIcon size="lg" />
          <AllIcons.GenericPendingIcon size="lg" />
          <AllIcons.GenericPictureIcon size="lg" />
          <AllIcons.GenericPlusIcon size="lg" />
          <AllIcons.GenericSearchIcon size="lg" />
          <AllIcons.GenericSettingsIcon size="lg" />
          <AllIcons.GenericShareAndroidIcon size="lg" />
          <AllIcons.GenericShareIosIcon size="lg" />
          <AllIcons.GenericShareIosBigIcon size="lg" />
          <AllIcons.GenericStarIcon size="lg" />
          <AllIcons.GenericTagIcon size="lg" />
          <AllIcons.GenericTicketIcon size="lg" />
          <AllIcons.GenericTrophyIcon size="lg" />
          <AllIcons.GenericUploadIcon size="lg" />
          <AllIcons.GenericUserIcon size="lg" />
          <AllIcons.GenericUserSwappingIcon size="lg" />
          <AllIcons.GenericUsersIcon size="lg" />
          <AllIcons.MailBoxIcon size="lg" />
          <AllIcons.MailEmailStatsIcon size="lg" />
          <AllIcons.MailEnvelopeIcon size="lg" />
          <AllIcons.MailFilterIcon size="lg" />
          <AllIcons.MailFilterCrossedIcon size="lg" />
          <AllIcons.MailFlagIcon size="lg" />
          <AllIcons.MailLinkIcon size="lg" />
          <AllIcons.MailSendIcon size="lg" />
          <AllIcons.MailSendRightIcon size="lg" />
          <AllIcons.MapsLocationIcon size="lg" />
          <AllIcons.MapsMapIcon size="lg" />
          <AllIcons.MapsMarkerIcon size="lg" />
          <AllIcons.MapsPanoramaIcon size="lg" />
          <AllIcons.MapsPinIcon size="lg" />
          <AllIcons.MapsPinAddIcon size="lg" />
          <AllIcons.MapsPinLocationIcon size="lg" />
          <AllIcons.MapsWorldIcon size="lg" />
          <AllIcons.MediaAutoPlayIcon size="lg" />
          <AllIcons.MediaCssIcon size="lg" />
          <AllIcons.MediaCsvIcon size="lg" />
          <AllIcons.MediaExeIcon size="lg" />
          <AllIcons.MediaFastBackIcon size="lg" />
          <AllIcons.MediaFastForwardIcon size="lg" />
          <AllIcons.MediaGifAlternativeIcon size="lg" />
          <AllIcons.MediaHeadphonesIcon size="lg" />
          <AllIcons.MediaHtmlIcon size="lg" />
          <AllIcons.MediaJpgIcon size="lg" />
          <AllIcons.MediaJsIcon size="lg" />
          <AllIcons.MediaMegaphoneIcon size="lg" />
          <AllIcons.MediaMiceIcon size="lg" />
          <AllIcons.MediaMiceAlternativeIcon size="lg" />
          <AllIcons.MediaMonitorIcon size="lg" />
          <AllIcons.MediaMp3Icon size="lg" />
          <AllIcons.MediaMp4Icon size="lg" />
          <AllIcons.MediaMusicIcon size="lg" />
          <AllIcons.MediaNoVolumeIcon size="lg" />
          <AllIcons.MediaPauseIcon size="lg" />
          <AllIcons.MediaPhotoIcon size="lg" />
          <AllIcons.MediaPhpIcon size="lg" />
          <AllIcons.MediaPlayIcon size="lg" />
          <AllIcons.MediaPngIcon size="lg" />
          <AllIcons.MediaPptIcon size="lg" />
          <AllIcons.MediaPsdIcon size="lg" />
          <AllIcons.MediaSoundwaveIcon size="lg" />
          <AllIcons.MediaStopIcon size="lg" />
          <AllIcons.MediaTunerIcon size="lg" />
          <AllIcons.MediaTunerAlternativeIcon size="lg" />
          <AllIcons.MediaTxtIcon size="lg" />
          <AllIcons.MediaVideoIcon size="lg" />
          <AllIcons.MediaVolumeIcon size="lg" />
          <AllIcons.MediaXllIcon size="lg" />
          <AllIcons.MediaXmlIcon size="lg" />
          <AllIcons.MediaZipIcon size="lg" />
          <AllIcons.NotificationsActivityIcon size="lg" />
          <AllIcons.NotificationsAddBellIcon size="lg" />
          <AllIcons.NotificationsAlertIcon size="lg" />
          <AllIcons.NotificationsAppIcon size="lg" />
          <AllIcons.NotificationsBellIcon size="lg" />
          <AllIcons.NotificationsBellAlarmIcon size="lg" />
          <AllIcons.NotificationsBellCrossIcon size="lg" />
          <AllIcons.NotificationsBellRingingIcon size="lg" />
          <AllIcons.NotificationsBellRingingAlternativeIcon size="lg" />
          <AllIcons.NotificationsErrorIcon size="lg" />
          <AllIcons.NotificationsNotificationsIcon size="lg" />
          <AllIcons.NotificationsQuestionMarkIcon size="lg" />
          <AllIcons.NotificationsSettingsIcon size="lg" />
          <AllIcons.Other3DotsIcon size="lg" />
          <AllIcons.Other3DotsHorizontalIcon size="lg" />
          <AllIcons.Other43FreeIcon size="lg" />
          <AllIcons.Other66FreeIcon size="lg" />
          <AllIcons.OtherClapsIcon size="lg" />
          <AllIcons.OtherCrownIcon size="lg" />
          <AllIcons.OtherFlameIcon size="lg" />
          <AllIcons.OtherFrameIcon size="lg" />
          <AllIcons.OtherFreebetIcon size="lg" />
          <AllIcons.OtherIdIcon size="lg" />
          <AllIcons.OtherLifebuoyIcon size="lg" />
          <AllIcons.OtherLightningIcon size="lg" />
          <AllIcons.OtherLiveCasinoIcon size="lg" />
          <AllIcons.OtherMoonIcon size="lg" />
          <AllIcons.OtherPlugIcon size="lg" />
          <AllIcons.OtherRewardsIcon size="lg" />
          <AllIcons.OtherRocketIcon size="lg" />
          <AllIcons.OtherSadIcon size="lg" />
          <AllIcons.OtherSmileIcon size="lg" />
          <AllIcons.OtherSunIcon size="lg" />
          <AllIcons.OtherWaterIcon size="lg" />
          <AllIcons.SecurityBetInsuranceIcon size="lg" />
          <AllIcons.SecurityKeyIcon size="lg" />
          <AllIcons.SecurityLockIcon size="lg" />
          <AllIcons.SecurityMagnetIcon size="lg" />
          <AllIcons.SecurityPassportIcon size="lg" />
          <AllIcons.SecurityPassportAlertIcon size="lg" />
          <AllIcons.SecurityQrCodeIcon size="lg" />
          <AllIcons.SecuritySecurityAttentionIcon size="lg" />
          <AllIcons.SecurityShieldIcon size="lg" />
          <AllIcons.SecurityShieldSecuredIcon size="lg" />
          <AllIcons.SecurityUmbrellaIcon size="lg" />
          <AllIcons.SecurityUnlockIcon size="lg" />
          <AllIcons.SecurityVerifiedIcon size="lg" />
          <AllIcons.SecurityVerifiedFaceIcon size="lg" />
          <AllIcons.ShopBagIcon size="lg" />
          <AllIcons.ShopBankIcon size="lg" />
          <AllIcons.ShopBasketIcon size="lg" />
          <AllIcons.ShopBuyCryptoIcon size="lg" />
          <AllIcons.ShopCardIcon size="lg" />
          <AllIcons.ShopCartIcon size="lg" />
          <AllIcons.ShopCoinsIcon size="lg" />
          <AllIcons.ShopCryptoIcon size="lg" />
          <AllIcons.ShopCryptoCoinIcon size="lg" />
          <AllIcons.ShopWalletIcon size="lg" />
          <AllIcons.ShopWirelessPayIcon size="lg" />
          <AllIcons.SoftwareBugIcon size="lg" />
          <AllIcons.SoftwareClearIcon size="lg" />
          <AllIcons.SoftwareCodeIcon size="lg" />
          <AllIcons.SoftwareCursorIcon size="lg" />
          <AllIcons.SoftwareDashboardIcon size="lg" />
          <AllIcons.SoftwareDataIcon size="lg" />
          <AllIcons.SoftwareDownloadIcon size="lg" />
          <AllIcons.SoftwareHandIcon size="lg" />
          <AllIcons.SoftwareLogOutIcon size="lg" />
          <AllIcons.SoftwareLoginIcon size="lg" />
          <AllIcons.SoftwareNutIcon size="lg" />
          <AllIcons.SoftwarePlateIcon size="lg" />
          <AllIcons.SoftwarePuzzleIcon size="lg" />
          <AllIcons.SoftwareSettingsIcon size="lg" />
          <AllIcons.SoftwareShutdownIcon size="lg" />
          <AllIcons.SoftwareSortingIcon size="lg" />
          <AllIcons.SoftwareTurnOffIcon size="lg" />
          <AllIcons.SoftwareWrenchIcon size="lg" />
          <AllIcons.SportAmericanFootballIcon size="lg" />
          <AllIcons.SportArcheryIcon size="lg" />
          <AllIcons.SportAthleticsIcon size="lg" />
          <AllIcons.SportAudlIcon size="lg" />
          <AllIcons.SportBadmintonIcon size="lg" />
          <AllIcons.SportBaseballIcon size="lg" />
          <AllIcons.SportBasketballIcon size="lg" />
          <AllIcons.SportBeachVolleyballIcon size="lg" />
          <AllIcons.SportBiathlonIcon size="lg" />
          <AllIcons.SportBombayIcon size="lg" />
          <AllIcons.SportBowlsIcon size="lg" />
          <AllIcons.SportBoxingIcon size="lg" />
          <AllIcons.SportCallOfDutyIcon size="lg" />
          <AllIcons.SportCanoeingIcon size="lg" />
          <AllIcons.SportCarRacingIcon size="lg" />
          <AllIcons.SportCasinoIcon size="lg" />
          <AllIcons.SportChessIcon size="lg" />
          <AllIcons.SportCricketIcon size="lg" />
          <AllIcons.SportCrossCountryIcon size="lg" />
          <AllIcons.SportCurlingIcon size="lg" />
          <AllIcons.SportCyclingIcon size="lg" />
          <AllIcons.SportDartsIcon size="lg" />
          <AllIcons.SportDivingIcon size="lg" />
          <AllIcons.SportDota2Icon size="lg" />
          <AllIcons.SportEquestrianIcon size="lg" />
          <AllIcons.SportEsportGenericIcon size="lg" />
          <AllIcons.SportFeaturedIcon size="lg" />
          <AllIcons.SportFencingIcon size="lg" />
          <AllIcons.SportFieldHockeyIcon size="lg" />
          <AllIcons.SportFloorballIcon size="lg" />
          <AllIcons.SportFormula1Icon size="lg" />
          <AllIcons.SportFormulaEIcon size="lg" />
          <AllIcons.SportFutsalIcon size="lg" />
          <AllIcons.SportGaelicHurlingIcon size="lg" />
          <AllIcons.SportGolfIcon size="lg" />
          <AllIcons.SportGreyhoundIcon size="lg" />
          <AllIcons.SportGymnasticsIcon size="lg" />
          <AllIcons.SportHandballIcon size="lg" />
          <AllIcons.SportHarnessIcon size="lg" />
          <AllIcons.SportHorseRacingIcon size="lg" />
          <AllIcons.SportIceHockeyIcon size="lg" />
          <AllIcons.SportIndyRacingIcon size="lg" />
          <AllIcons.SportJudoIcon size="lg" />
          <AllIcons.SportKabaddiIcon size="lg" />
          <AllIcons.SportKingOfGloryIcon size="lg" />
          <AllIcons.SportLacrosseIcon size="lg" />
          <AllIcons.SportMmaIcon size="lg" />
          <AllIcons.SportMotorIcon size="lg" />
          <AllIcons.SportMotorcycleRacingIcon size="lg" />
          <AllIcons.SportNordicCombinedIcon size="lg" />
          <AllIcons.SportOlympicsIcon size="lg" />
          <AllIcons.SportOverwatchIcon size="lg" />
          <AllIcons.SportRainbowSixIcon size="lg" />
          <AllIcons.SportRocketLeagueIcon size="lg" />
          <AllIcons.SportRowingIcon size="lg" />
          <AllIcons.SportRugbyIcon size="lg" />
          <AllIcons.SportSailingIcon size="lg" />
          <AllIcons.SportSetTennisIcon size="lg" />
          <AllIcons.SportSkateboardingIcon size="lg" />
          <AllIcons.SportSkiJumpingIcon size="lg" />
          <AllIcons.SportSnookerIcon size="lg" />
          <AllIcons.SportSoccerIcon size="lg" />
          <AllIcons.SportSpecialSportsIcon size="lg" />
          <AllIcons.SportSpecialsIcon size="lg" />
          <AllIcons.SportSpeedwayIcon size="lg" />
          <AllIcons.SportSportsbetIcon size="lg" />
          <AllIcons.SportSquashIcon size="lg" />
          <AllIcons.SportSurfingIcon size="lg" />
          <AllIcons.SportSwimmingIcon size="lg" />
          <AllIcons.SportTableTennisIcon size="lg" />
          <AllIcons.SportTennisIcon size="lg" />
          <AllIcons.SportTriathlonIcon size="lg" />
          <AllIcons.SportVolleyballIcon size="lg" />
          <AllIcons.SportWaterpoloIcon size="lg" />
          <AllIcons.SportWeightliftingIcon size="lg" />
          <AllIcons.SportWrestlingIcon size="lg" />
          <AllIcons.TextAncorIcon size="lg" />
          <AllIcons.TextAttachIcon size="lg" />
          <AllIcons.TextBoldIcon size="lg" />
          <AllIcons.TextBulletsListIcon size="lg" />
          <AllIcons.TextCardsIcon size="lg" />
          <AllIcons.TextCenterIcon size="lg" />
          <AllIcons.TextClearFormattingIcon size="lg" />
          <AllIcons.TextCutIcon size="lg" />
          <AllIcons.TextHashtagIcon size="lg" />
          <AllIcons.TextIncreaseIndentIcon size="lg" />
          <AllIcons.TextInsertLineIcon size="lg" />
          <AllIcons.TextItalicIcon size="lg" />
          <AllIcons.TextLeftAlignIcon size="lg" />
          <AllIcons.TextListViewIcon size="lg" />
          <AllIcons.TextMarkerIcon size="lg" />
          <AllIcons.TextMathIcon size="lg" />
          <AllIcons.TextNumbersListIcon size="lg" />
          <AllIcons.TextRightAlignIcon size="lg" />
          <AllIcons.TextSizeIcon size="lg" />
          <AllIcons.TextStrikethroughIcon size="lg" />
          <AllIcons.TextStyleIcon size="lg" />
          <AllIcons.TextTableIcon size="lg" />
          <AllIcons.TextTableAlternativeIcon size="lg" />
          <AllIcons.TextUnderlineIcon size="lg" />
          <AllIcons.TimeAlarmIcon size="lg" />
          <AllIcons.TimeCalendarIcon size="lg" />
          <AllIcons.TimeCalendarAddIcon size="lg" />
          <AllIcons.TimeCalendarAlternativeIcon size="lg" />
          <AllIcons.TimeCalendarDateIcon size="lg" />
          <AllIcons.TimeCalendarRemoveIcon size="lg" />
          <AllIcons.TimeCalendarSuccessIcon size="lg" />
          <AllIcons.TimeClockIcon size="lg" />
          <AllIcons.TimeSandglassIcon size="lg" />
          <AllIcons.TimeStopwatchIcon size="lg" />
          <AllIcons.TimeStopwatchTimerIcon size="lg" />
          <AllIcons.TimeTimeIcon size="lg" />
          <AllIcons.TimeWatchIcon size="lg" />
          <AllIcons.TravelAirplaneIcon size="lg" />
          <AllIcons.TravelAirplaneDownIcon size="lg" />
          <AllIcons.TravelAirplaneUpIcon size="lg" />
          <AllIcons.TravelBeachChairIcon size="lg" />
          <AllIcons.TravelBedIcon size="lg" />
          <AllIcons.TravelBillIcon size="lg" />
          <AllIcons.TravelHotelIcon size="lg" />
          <AllIcons.TravelLuggageIcon size="lg" />
          <AllIcons.TravelMealIcon size="lg" />
          <AllIcons.TravelNoSuitcaseIcon size="lg" />
          <AllIcons.TravelPassportIcon size="lg" />
          <AllIcons.TravelPlugIcon size="lg" />
          <AllIcons.TravelRestIcon size="lg" />
          <AllIcons.TravelRoomIcon size="lg" />
          <AllIcons.TravelSeatsIcon size="lg" />
          <AllIcons.TravelSuitcaseIcon size="lg" />
          <AllIcons.TravelSwimmingPoolIcon size="lg" />
          <AllIcons.TravelYachtIcon size="lg" />
        </div>
      }
    />
  </div>
);
