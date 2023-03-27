import {StyleSheet, Dimensions} from 'react-native';
import {
  accentColor,
  grayColor,
  lightGrayColor,
  headerBlack,
  defaultBlack1,
  defaultBlack2,
  defaultBlack3,
  subHeaderBlack,
  textDarkSecondary,
  textDarkTernary,
  lowRiskTextColor,
  lowRiskBorderColor,
  lowRiskBackgroundColor,
  mediumRiskTextColor,
  mediumRiskBorderColor,
  mediumRiskBackgroundColor,
  highRiskText,
  highRiskBorderColor,
  highRiskBackgroundColor,
  learnAboutEtfBackground,
  zebraViewGray,
  dimGray,
  primaryColor,
  disabledTextColor,
  lightestGrayColor,
  downloadHeaderColor,
  errorTextColor,
  greenTextColor,
  lightGrayBackGround,
  blueBorderColor,
  blueBorderColor80,
  blueBorderBgColor,
  blueColor,
  dashboardSelectedFilterColor,
  dashboardCarkBorderCOlor,
  lightGray,
  tintInfoBtnBlueColor,
  white,
  greyText,
  darkBlueColor,
  messageReadBackground,
  moderateBlue,
  lightGrayColor2,
  lightGreyishBlue,
  darkLimeGreen,
  veryDarkGreyishRed,
  noteTitleText,
  accountHeaderGrey,
  stepperDisable,
  fundingGrey,
  fundingRed,
  stepperText,
  lightGrayColor3,
  kristalDetailsBlue,
  zendeskBtnColor,
  zendeskStatusColor,
  zendeskTicketLinkColor,
  veryDarkGreyishBlue,
  backgroundWhite,
  veryDarkDesaturatedBlue,
  veryLightGrayColor,
  darkBlueColor2,
  moderateBlueLaunchpoint,
  moderateBlueAccounts,
  darkGrey,
  ceruleanBlue,
  almostBlack,
  darkGrey80,
  backgroundOffWhite,
  fontLight,
  darkGrey40,
  red100,
  darkGrey20,
  kristalBlue80,
  darkGrey10,
  boxShadowColor,
  appBackgroundColor,
  lightGreyishYellow,
  darkGrey60,
  red40,
  kristalDarkYellow,
  black,
  chipBlue,
  lightBlue,
  kristalGreen,
  decisionDialogGrey,
  decisionBlue,
  textDarkGrey80,
  kycDocBkgColor,
  kycNoteBkgColor,
  lightDarkGrey80,
  kristalBlue60,
  disabledCardColor,
  disabledSliderColor,
  kristalBlue20,
  kristalBlue40,
  darkGrey30,
  kristalGreen40,
  green60,
} from './colors';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

const dynamicWidthFormula = () => {
  if (screenWidth > 550) {
    return 1.5;
  }

  return screenWidth / 375;
};

export const sq = dynamicWidthFormula();

const styles = StyleSheet.create({
  // Stack and Container
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  rowWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBaseline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  jcSpaceBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
  jcSpaceAround: {
    flex: 1,
    justifyContent: 'space-around',
  },
  centerChild: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarCenter: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: backgroundOffWhite,
  },
  secContainer: {
    marginLeft: sq * 16,
    marginRight: sq * 16,
    marginVertical: sq * 20,
  },
  secContainerLeft: {
    marginLeft: sq * 16,
  },
  searchContainer: {
    height: sq * 40,
    borderColor: '#c3c3c3',
    borderWidth: 1,
    borderRadius: 4,
  },
  searchListContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    maxHeight: sq * 300,
    zIndex: 100,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  dropDownListContainer: {
    left: 0,
    width: '100%',
    maxHeight: sq * 300,
    zIndex: 100,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 8,
  },
  dropDownListContainerAbsolute: {
    position: 'absolute',
    left: 0,
    width: '100%',
    maxHeight: sq * 300,
    zIndex: 100,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  radioButtonOutsideCircle: {
    height: sq * 18,
    width: sq * 18,
    borderRadius: sq * 100,
    borderWidth: sq * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelectedCircle: {
    width: sq * 10,
    height: sq * 10,
    borderRadius: sq * 50,
    backgroundColor: accentColor,
  },
  radioButtonOutsideSquare: {
    height: sq * 18,
    width: sq * 18,
    borderRadius: sq * 2,
    borderWidth: sq * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelectedSquare: {
    width: sq * 10,
    height: sq * 10,
    borderRadius: sq * 2,
    backgroundColor: 'black',
  },
  radioButtonSelectedBlueCircle: {
    width: sq * 10,
    height: sq * 10,
    borderRadius: sq * 50,
    backgroundColor: blueColor,
  },
  radioButtonSelectedBlueSquare: {
    width: sq * 10,
    height: sq * 10,
    borderRadius: sq * 2,
    backgroundColor: blueColor,
  },
  downloadSortHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: sq * 14,
    paddingRight: sq * 22,
    paddingTop: sq * 16,
    paddingBottom: sq * 16,
    backgroundColor: '#FCFAFA',
    marginBottom: sq * 8,
  },
  kristalListItem: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    paddingBottom: sq * 16,
    paddingLeft: sq * 16,
    paddingTop: sq * 16,
    marginRight: sq * 4,
  },
  subscriptionHistoryCancelButton: {
    width: sq * 84,
    borderWidth: sq * 1,
    borderColor: '#000',
    borderRadius: sq * 4,
    backgroundColor: 'rgba(248, 245, 245, 0.45)',
    alignItems: 'center',
    paddingTop: sq * 4,
    paddingBottom: sq * 4,
    marginTop: sq * 8,
  },
  subscriptionHistoryDetailsCancelButton: {
    alignItems: 'center',
    width: '100%',
    borderColor: '#707070',
    borderWidth: sq * 0.5,
    borderRadius: sq * 1,
    paddingBottom: sq * 20,
    paddingTop: sq * 20,
  },
  subscriptionHistoryContractNoteButton: {
    borderWidth: sq * 1,
    borderColor: '#0188DC',
    borderRadius: sq * 4,
    alignSelf: 'center',
    marginRight: sq * 16,
  },
  investedKristalContactRMButton: {
    alignItems: 'center',
    width: '100%',
    height: sq * 48,
    borderWidth: sq * 0.5,
    borderRadius: sq * 1,
    backgroundColor: '#027FC1',
    justifyContent: 'center',
  },
  filledCircle: {
    width: sq * 16,
    height: sq * 16,
    borderRadius: sq * 8,
  },
  transactionItem: {
    paddingTop: sq * 8,
    paddingBottom: sq * 8,
    paddingLeft: sq * 24,
    paddingRight: sq * 24,
    fontSize: sq * 10,
    fontWeight: 'bold',
    borderWidth: 1,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#fff',
    borderRadius: 16,
    flex: 1,
  },
  transactionItemBig: {
    paddingTop: sq * 8,
    paddingBottom: sq * 8,
    paddingLeft: sq * 8,
    paddingRight: sq * 8,
    fontSize: sq * 10,
    borderWidth: 1,
    borderRadius: 16,
    flex: 1,
    alignSelf: 'center',
  },
  transactionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  transactionSell: {
    borderColor: '#F57C00',
    backgroundColor: '#F57C00',
  },
  transactionBuy: {
    borderColor: '#006775',
    backgroundColor: '#006775',
  },
  transactionAssetIn: {
    borderColor: '#00B9D3',
    backgroundColor: '#00B9D3',
  },
  transactionAssetOut: {
    borderColor: '#FFB060',
    backgroundColor: '#FFB060',
  },
  transactionDeposit: {
    borderColor: '#008395',
    backgroundColor: '#008395',
    paddingLeft: sq * 16,
    paddingRight: sq * 16,
  },
  transactionDividend: {
    borderColor: '#008395',
    backgroundColor: '#008395',
    paddingLeft: sq * 16,
    paddingRight: sq * 16,
  },
  transactionWithdraw: {
    borderColor: '#FF9B35',
    backgroundColor: '#FF9B35',
    paddingLeft: sq * 6,
    paddingRight: sq * 6,
  },
  transactionInterestPayment: {
    paddingTop: sq * 12,
    paddingLeft: sq * 12,
    paddingRight: sq * 12,
    height: sq * 50,
    borderColor: '#008395',
    backgroundColor: '#008395',
    borderRadius: sq * 24,
  },
  transactionInterAccount: {
    borderColor: '#DBA054',
    backgroundColor: '#DBA054',
    paddingLeft: sq * 6,
    paddingRight: sq * 6,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex5: {
    flex: 5,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  jcCenter: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  jcFlexStart: {
    justifyContent: 'flex-start',
  },
  jcFlexEnd: {
    justifyContent: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  positionRelative: {
    position: 'relative',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignLeft: {
    textAlign: 'left',
  },

  // Margin
  margin: {
    margin: sq * 16,
  },
  m8: {
    margin: sq * 8,
  },
  m10: {
    margin: sq * 10,
  },
  m16: {
    margin: sq * 16,
  },
  m20: {
    margin: sq * 20,
  },
  marginModal: {
    marginLeft: sq * 32,
    marginRight: sq * 32,
    marginBottom: sq * 32,
  },
  mt2: {
    marginTop: sq * 2,
  },
  mt3: {
    marginTop: sq * 3,
  },
  mt4: {
    marginTop: sq * 4,
  },
  mt6: {
    marginTop: sq * 6,
  },
  mt8: {
    marginTop: sq * 8,
  },
  mt18: {
    marginTop: sq * 18,
  },
  mb0: {
    marginBottom: 0,
  },
  mb1: {
    marginBottom: sq * 1,
  },
  mb2: {
    marginBottom: sq * 2,
  },
  mb4: {
    marginBottom: sq * 4,
  },
  mb6: {
    marginBottom: sq * 6,
  },
  mb8: {
    marginBottom: sq * 8,
  },
  mt10: {
    marginTop: sq * 10,
  },
  mt11: {
    marginTop: sq * 11,
  },
  mt12: {
    marginTop: sq * 12,
  },
  mb10: {
    marginBottom: sq * 10,
  },
  mb12: {
    marginBottom: sq * 12,
  },
  mt14: {
    marginTop: sq * 14,
  },
  mt16: {
    marginTop: sq * 16,
  },
  mb18: {
    marginBottom: sq * 18,
  },
  mb16: {
    marginBottom: sq * 16,
  },
  mt20: {
    marginTop: sq * 20,
  },
  mb20: {
    marginBottom: sq * 20,
  },
  mb30: {
    marginBottom: sq * 20,
  },
  mb56: {
    marginBottom: sq * 56,
  },
  mt22: {
    marginTop: sq * 22,
  },
  mt24: {
    marginTop: sq * 24,
  },
  mt28: {
    marginTop: sq * 28,
  },
  mt16Minus: {
    marginTop: sq * -16,
  },
  mt40Minus: {
    marginTop: sq * -40,
  },
  mb24: {
    marginBottom: sq * 24,
  },
  mt30: {
    marginTop: sq * 30,
  },
  mt32: {
    marginTop: sq * 32,
  },
  mt34: {
    marginTop: sq * 34,
  },
  mt40: {
    marginTop: sq * 40,
  },
  mt44: {
    marginTop: sq * 44,
  },
  mt48: {
    marginTop: sq * 48,
  },
  mt98: {
    marginTop: sq * 98,
  },
  mt108: {
    marginTop: sq * 108,
  },
  mt148: {
    marginTop: sq * 148,
  },
  mb32: {
    marginBottom: sq * 32,
  },
  mb40: {
    marginBottom: sq * 40,
  },
  mb48: {
    marginBottom: sq * 48,
  },
  mb64: {
    marginBottom: sq * 64,
  },
  mb72: {
    marginBottom: sq * 72,
  },
  mb200: {
    marginBottom: sq * 200,
  },
  mt52: {
    marginTop: sq * 52,
  },
  mt56: {
    marginTop: sq * 56,
  },
  mt64: {
    marginTop: sq * 64,
  },
  mt72: {
    marginTop: sq * 72,
  },
  ml0: {
    marginLeft: 0,
  },
  ml2: {
    marginLeft: sq * 2,
  },
  ml4: {
    marginLeft: sq * 4,
  },
  ml6: {
    marginLeft: sq * 6,
  },
  mr6: {
    marginRight: sq * 6,
  },
  ml8: {
    marginLeft: sq * 8,
  },
  ml10: {
    marginLeft: sq * 10,
  },
  ml12: {
    marginLeft: sq * 12,
  },
  ml14: {
    marginLeft: sq * 14,
  },
  ml16: {
    marginLeft: sq * 16,
  },
  ml20: {
    marginLeft: sq * 20,
  },
  ml23: {
    marginLeft: sq * 23,
  },
  ml24: {
    marginLeft: sq * 24,
  },
  ml28: {
    marginLeft: sq * 28,
  },
  ml32: {
    marginLeft: sq * 32,
  },
  ml36: {
    marginLeft: sq * 36,
  },
  ml40: {
    marginLeft: sq * 40,
  },
  ml44: {
    marginLeft: sq * 44,
  },
  ml48: {
    marginLeft: sq * 48,
  },
  ml64: {
    marginLeft: sq * 64,
  },
  ml68: {
    marginLeft: sq * 68,
  },
  ml70: {
    marginLeft: sq * 70,
  },
  ml84: {
    marginLeft: sq * 84,
  },
  ml90: {
    marginLeft: sq * 90,
  },
  ml124: {
    marginLeft: sq * 124,
  },
  ml130: {
    marginLeft: sq * 130,
  },
  ml147: {
    marginLeft: sq * 147,
  },
  ml152: {
    marginLeft: sq * 152,
  },
  ml180: {
    marginLeft: sq * 180,
  },
  ml200: {
    marginLeft: sq * 200,
  },
  mr0: {
    marginRight: 0,
  },
  mr4: {
    marginRight: sq * 4,
  },
  mr8: {
    marginRight: sq * 8,
  },
  mr10: {
    marginRight: sq * 10,
  },
  mr12: {
    marginRight: sq * 12,
  },
  mr14: {
    marginRight: sq * 14,
  },
  mr16: {
    marginRight: sq * 16,
  },
  mr20: {
    marginRight: sq * 20,
  },
  mr24: {
    marginRight: sq * 24,
  },
  mr32: {
    marginRight: sq * 32,
  },
  mr40: {
    marginRight: sq * 40,
  },
  mr48: {
    marginRight: sq * 48,
  },
  mr64: {
    marginRight: sq * 64,
  },
  mt120: {
    marginTop: sq * 120,
  },

  // Padding
  p2: {
    padding: sq * 2,
  },
  p4: {
    padding: sq * 4,
  },
  p8: {
    padding: sq * 8,
  },
  p10: {
    padding: sq * 10,
  },
  p12: {
    padding: sq * 12,
  },
  p16: {
    padding: sq * 16,
  },
  p18: {
    padding: sq * 18,
  },
  p20: {
    padding: sq * 20,
  },
  p24: {
    padding: sq * 24,
  },
  pt1: {
    paddingTop: sq * 1,
  },
  pt2: {
    paddingTop: sq * 2,
  },
  pt3: {
    paddingTop: sq * 3,
  },
  pt4: {
    paddingTop: sq * 4,
  },
  pt4Minus: {
    top: sq * -4,
  },
  pt6: {
    paddingTop: sq * 6,
  },
  pt7: {
    paddingTop: sq * 7,
  },
  pt8: {
    paddingTop: sq * 8,
  },
  pt10: {
    paddingTop: sq * 10,
  },
  pt11: {
    paddingTop: sq * 11,
  },
  pt12: {
    paddingTop: sq * 12,
  },
  pt14: {
    paddingTop: sq * 14,
  },
  pt16: {
    paddingTop: sq * 16,
  },
  pt24: {
    paddingTop: sq * 24,
  },
  pt20: {
    paddingTop: sq * 20,
  },
  pt22: {
    paddingTop: sq * 22,
  },
  pt30: {
    paddingTop: sq * 30,
  },
  pt32: {
    paddingTop: sq * 32,
  },
  pt34: {
    paddingTop: sq * 34,
  },
  pt40: {
    paddingTop: sq * 40,
  },
  pt42: {
    paddingTop: sq * 42,
  },
  pt44: {
    paddingTop: sq * 44,
  },
  pt48: {
    paddingTop: sq * 48,
  },
  pb1: {
    paddingBottom: sq * 1,
  },
  pb2: {
    paddingBottom: sq * 2,
  },
  pb3: {
    paddingBottom: sq * 3,
  },
  pb4: {
    paddingBottom: sq * 4,
  },
  pb5: {
    paddingBottom: sq * 5,
  },
  pb6: {
    paddingBottom: sq * 6,
  },
  pb7: {
    paddingBottom: sq * 7,
  },
  pb8: {
    paddingBottom: sq * 8,
  },
  pb10: {
    paddingBottom: sq * 10,
  },
  pb11: {
    paddingBottom: sq * 11,
  },
  pb12: {
    paddingBottom: sq * 12,
  },
  pb14: {
    paddingBottom: sq * 14,
  },
  pb16: {
    paddingBottom: sq * 16,
  },
  pb18: {
    paddingBottom: sq * 18,
  },
  pb20: {
    paddingBottom: sq * 20,
  },
  pb22: {
    paddingBottom: sq * 22,
  },
  pb24: {
    paddingBottom: sq * 24,
  },
  pb32: {
    paddingBottom: sq * 32,
  },
  pb36: {
    paddingBottom: sq * 36,
  },
  pb40: {
    paddingBottom: sq * 40,
  },
  pb42: {
    paddingBottom: sq * 42,
  },
  pl2: {
    paddingLeft: sq * 2,
  },
  pl4: {
    paddingLeft: sq * 4,
  },
  pl6: {
    paddingLeft: sq * 6,
  },
  pl8: {
    paddingLeft: sq * 8,
  },
  pl12: {
    paddingLeft: sq * 12,
  },
  pl16: {
    paddingLeft: sq * 16,
  },
  pl20: {
    paddingLeft: sq * 20,
  },
  pl24: {
    paddingLeft: sq * 24,
  },
  pl32: {
    paddingLeft: sq * 32,
  },
  pl40: {
    paddingLeft: sq * 40,
  },
  pl46: {
    paddingLeft: sq * 46,
  },
  pr4: {
    paddingRight: sq * 4,
  },
  pr6: {
    paddingRight: sq * 6,
  },
  pr8: {
    paddingRight: sq * 8,
  },
  pr12: {
    paddingRight: sq * 12,
  },
  pr16: {
    paddingRight: sq * 16,
  },
  pr32: {
    paddingRight: sq * 32,
  },
  pr46: {
    paddingRight: sq * 46,
  },
  pr60: {
    paddingRight: sq * 60,
  },
  pr64: {
    paddingRight: sq * 64,
  },
  pr24: {
    paddingRight: sq * 24,
  },
  paddingAround: {
    paddingHorizontal: sq * 12,
    paddingVertical: sq * 12,
  },
  paddingAround8: {
    paddingHorizontal: sq * 8,
    paddingVertical: sq * 8,
  },

  // Text
  text28b: {
    fontSize: sq * 28,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text24b: {
    fontSize: sq * 24,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text24sb: {
    fontSize: sq * 24,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text22sb: {
    fontSize: sq * 22,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text22b: {
    fontSize: sq * 22,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text20: {
    fontSize: sq * 20,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text20b: {
    fontSize: sq * 20,
    fontWeight: 'bold',
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  text20sb: {
    fontSize: sq * 20,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text13: {
    fontSize: sq * 13,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text13m: {
    fontSize: sq * 13,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text13sb: {
    fontSize: sq * 13,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text13b: {
    fontSize: sq * 13,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text16: {
    fontSize: sq * 16,
    fontFamily: 'AktivGroteskCorp-Regular',
    lineHeight: sq * 24,
  },
  text16b: {
    fontSize: sq * 16,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text16m: {
    fontSize: sq * 16,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text16sb: {
    fontSize: sq * 16,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text16i: {
    fontSize: sq * 16,
    fontFamily: 'AktivGroteskCorp-Regular',
    fontStyle: 'italic',
  },
  text18: {
    fontSize: sq * 18,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text18b: {
    fontSize: sq * 18,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text18m: {
    fontSize: sq * 18,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text18sb: {
    fontSize: sq * 18,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text17sb: {
    fontSize: sq * 17,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text15: {
    fontSize: sq * 15,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text15b: {
    fontSize: sq * 15,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text15m: {
    fontSize: sq * 15,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text15sb: {
    fontSize: sq * 15,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text14: {
    fontSize: sq * 14,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text14i: {
    fontSize: sq * 14,
    fontFamily: 'AktivGroteskCorp-Regular',
    fontStyle: 'italic',
  },
  text14lh: {
    fontSize: sq * 14,
    fontFamily: 'AktivGroteskCorp-Regular',
    lineHeight: sq * 21,
  },
  text14b: {
    fontSize: sq * 14,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text14m: {
    fontSize: sq * 14,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text14sb: {
    fontSize: sq * 14,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text12: {
    fontSize: sq * 12,
    fontFamily: 'AktivGroteskCorp-Regular',
    lineHeight: sq * 18,
  },
  text12m: {
    fontSize: sq * 12,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text12mlh: {
    fontSize: sq * 12,
    fontFamily: 'AktivGroteskCorp-Medium',
    lineHeight: sq * 18,
  },
  text12mStatic: {
    fontSize: 12,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text12sb: {
    fontSize: sq * 12,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text12b: {
    fontSize: sq * 12,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text14bn: {
    fontSize: sq * 14,
    fontFamily: 'AktivGroteskCorp',
    fontWeight: 'bold',
  },
  text14n: {
    fontSize: sq * 14,
    fontFamily: 'AktivGroteskCorp',
  },
  text10bn: {
    fontSize: sq * 10,
    fontFamily: 'AktivGroteskCorp',
    fontWeight: 'bold',
  },
  text12bn: {
    fontSize: sq * 12,
    fontFamily: 'AktivGroteskCorp',
    fontWeight: 'bold',
  },
  text11i: {
    fontSize: sq * 11,
    fontFamily: 'AktivGroteskCorp-Italic',
    fontStyle: 'italic',
  },
  text12i: {
    fontSize: sq * 12,
    fontFamily: 'AktivGroteskCorp-Italic',
    fontStyle: 'italic',
  },
  text13ib: {
    fontSize: sq * 13,
    fontStyle: 'italic',
    fontFamily: 'AktivGroteskCorp-BoldItalic',
    fontWeight: 'bold',
  },
  text10i: {
    fontSize: sq * 10,
    fontFamily: 'AktivGroteskCorp-Italic',
    fontStyle: 'italic',
  },
  text10: {
    fontSize: sq * 10,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text6: {
    fontSize: sq * 6,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text10sb: {
    fontSize: sq * 10,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text10b: {
    fontSize: sq * 10,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text11sb: {
    fontSize: sq * 11,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  text11: {
    fontSize: sq * 11,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text8b: {
    fontSize: sq * 8,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  text8: {
    fontSize: sq * 8,
    fontFamily: 'AktivGroteskCorp-Regular',
  },
  text32: {
    fontSize: sq * 32,
    fontWeight: '800',
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  text32b: {
    fontSize: sq * 32,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontWeight: 'bold',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  projectionsTextInput: {
    height: sq * 40,
    width: sq * 100,
    backgroundColor: zebraViewGray,
    borderRadius: 4,
    paddingLeft: sq * 12,
    marginLeft: sq * 8,
  },
  projectionsTextInputSip: {
    height: sq * 40,
    width: sq * 90,
    backgroundColor: zebraViewGray,
    borderRadius: 4,
    paddingLeft: sq * 12,
    marginLeft: sq * 8,
  },
  advisoryAmountTextInput: {
    height: sq * 40,
    borderColor: 'rgba(194, 194, 194, 0.9)',
    borderWidth: sq * 1,
    borderRadius: sq * 4,
  },

  // Chip and Button
  defaultChipBorder: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    color: textDarkSecondary,
    fontSize: sq * 10,
    padding: sq * 5,
    paddingLeft: sq * 10,
    paddingRight: sq * 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  invertedChip: {
    color: 'white',
    fontSize: sq * 13,
    padding: sq * 6,
    borderRadius: 2,
    paddingLeft: sq * 12,
    paddingRight: sq * 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  lowRiskChip: {
    color: lowRiskTextColor,
    fontSize: sq * 10,
    padding: sq * 5,
    borderRadius: 2,
    paddingLeft: sq * 10,
    paddingRight: sq * 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: lowRiskBorderColor,
    backgroundColor: lowRiskBackgroundColor,
  },
  mediumRiskChip: {
    color: mediumRiskTextColor,
    fontSize: sq * 10,
    padding: sq * 5,
    borderRadius: 2,
    paddingLeft: sq * 10,
    paddingRight: sq * 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: mediumRiskBorderColor,
    backgroundColor: mediumRiskBackgroundColor,
  },
  highRiskChip: {
    color: highRiskText,
    fontSize: sq * 10,
    padding: sq * 5,
    borderRadius: 2,
    paddingLeft: sq * 10,
    paddingRight: sq * 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: highRiskBorderColor,
    backgroundColor: highRiskBackgroundColor,
  },
  bigLowRiskChip: {
    color: lowRiskTextColor,
    fontSize: sq * 14,
    padding: sq * 8,
    borderRadius: 2,
    paddingLeft: sq * 17,
    paddingRight: sq * 17,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: lowRiskBorderColor,
    backgroundColor: lowRiskBackgroundColor,
  },
  bigMediumRiskChip: {
    color: mediumRiskTextColor,
    fontSize: sq * 14,
    padding: sq * 8,
    borderRadius: 2,
    paddingLeft: sq * 17,
    paddingRight: sq * 17,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: mediumRiskBorderColor,
    backgroundColor: mediumRiskBackgroundColor,
  },
  bigHighRiskChip: {
    color: highRiskText,
    fontSize: sq * 14,
    padding: sq * 8,
    borderRadius: 2,
    paddingLeft: sq * 17,
    paddingRight: sq * 17,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: highRiskBorderColor,
    backgroundColor: highRiskBackgroundColor,
  },
  grayRiskChip: {
    color: 'gray',
    fontSize: sq * 10,
    padding: sq * 5,
    borderRadius: 2,
    paddingLeft: sq * 10,
    paddingRight: sq * 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    backgroundColor: '#ddd',
  },
  exitButton: {
    fontSize: sq * 10,
    borderRadius: 3,
    paddingLeft: sq * 15,
    paddingRight: sq * 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: highRiskBorderColor,
    backgroundColor: highRiskBackgroundColor,
  },
  buttonPadding: {
    paddingLeft: sq * 16,
    paddingRight: sq * 16,
    paddingTop: sq * 4,
    paddingBottom: sq * 4,
  },
  border: {
    borderWidth: 1,
    borderColor: grayColor,
    borderRadius: 2,
  },
  lightGreyBorder: {
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
    borderRadius: 2,
  },
  greyBorder: {
    borderWidth: 0.5,
    borderColor: '#949494',
    borderRadius: 2,
  },
  borderRed: {
    borderColor: fundingRed,
  },
  searchImage: {
    width: sq * 20,
    height: sq * 20,
  },
  arrowImage: {
    width: sq * 24,
    height: sq * 8,
    marginTop: sq * 16,
    marginLeft: sq * 8,
    paddingTop: sq * 20,
    tintColor: defaultBlack1,
  },
  advisoryButtonContainer: {
    marginLeft: sq * 16,
    marginTop: sq * 16,
    marginRight: sq * 16,
    marginBottom: sq * 8,
    width: sq * 104,
    height: sq * 104,
  },
  whatsappButtonContainer: {
    height: sq * 50,
    marginTop: sq * 8,
    borderRadius: sq * 36,
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  dropDownTextSize: {
    height: '100%',
    width: '100%',
  },
  width40Percent: {
    width: '40%',
  },
  width45Percent: {
    width: '45%',
  },
  width50Percent: {
    width: '50%',
  },
  width60Percent: {
    width: '60%',
  },
  width70Percent: {
    width: '70%',
  },
  width75Percent: {
    width: '75%',
  },
  width80Percent: {
    width: '80%',
  },
  width85Percent: {
    width: '85%',
  },
  width90Percent: {
    width: '90%',
  },
  width100Percent: {
    width: '100%',
  },
  height50Percent: {
    height: '50%',
  },
  height100Percent: {
    height: '100%',
  },
  downloadIcon: {
    width: sq * 16,
    height: sq * 16,
  },
  cardIcon: {
    width: sq * 24,
    height: sq * 24,
  },
  subscriptionStatusContainer: {
    height: sq * 30,
    fontSize: sq * 10,
    fontFamily: 'Acumin Pro',
    color: textDarkSecondary,
    paddingLeft: sq * 8,
    paddingRight: sq * 8,
    paddingTop: sq * 7,
    paddingBottom: sq * 4,
    backgroundColor: '#F8F5F5',
  },
  otpTextInput: {
    justifyContent: 'center',
    borderColor: '#c3c3c3',
    borderWidth: sq * 0.5,
    borderRadius: 4,
    width: sq * 40,
  },
  otpTextInputWithoutBorder: {
    justifyContent: 'center',
    width: sq * 40,
  },
  otpSuccessIcon: {
    width: sq * 64,
    height: sq * 64,
  },
  otpDialogButton: {
    width: sq * 72,
    fontSize: sq * 14,
    fontFamily: 'Acumin Pro',
    alignItems: 'center',
    borderWidth: sq * 1,
    borderColor: textDarkTernary,
    borderRadius: sq * 2,
    paddingTop: sq * 4,
    paddingBottom: sq * 4,
  },
  whatsappIcon: {
    width: sq * 40,
    height: sq * 80,
  },
  mailIcon: {
    width: sq * 24,
    height: sq * 24,
  },
  kristalIcon: {
    width: sq * 72,
    height: sq * 72,
  },

  // Color
  borderWhiteColor: {
    borderColor: white,
    borderWidth: 2,
  },
  borderAccentColor: {
    borderColor: accentColor,
  },
  borderBlueColor: {
    borderColor: blueColor,
  },
  borderBlackColor: {
    borderColor: defaultBlack1,
  },
  borderPrimaryColor: {
    borderColor: primaryColor,
  },
  borderLightGrayColor: {
    borderColor: lightGrayColor,
  },
  borderDisabledColor: {
    borderColor: disabledTextColor,
  },
  borderRadius4: {
    borderRadius: 4,
  },
  borderRadius8: {
    borderRadius: 8,
  },
  borderRadius10: {
    borderRadius: 10,
  },
  borderRadius16: {
    borderRadius: 16,
  },
  borderRadius24: {
    borderRadius: 24,
  },
  borderTopLeftRadius16: {
    borderTopLeftRadius: 16,
  },
  borderTopRightRadius16: {
    borderTopRightRadius: 16,
  },
  borderTopLeftRadius24: {
    borderTopLeftRadius: 24,
  },
  borderTopRightRadius24: {
    borderTopRightRadius: 24,
  },
  borderBottomLeftRadius16: {
    borderBottomLeftRadius: 16,
  },
  borderBottomRightRadius16: {
    borderBottomRightRadius: 16,
  },
  backgroundLightGreyishYellow: {
    backgroundColor: lightGreyishYellow,
  },
  backgroundKristalDarkYellow: {
    backgroundColor: kristalDarkYellow,
  },
  backgroundKristalDarkGrey80: {
    backgroundColor: darkGrey80,
  },
  backgroundBlue: {
    backgroundColor: blueBorderBgColor,
  },
  backgroundVeryLightGrayColor: {
    backgroundColor: veryLightGrayColor,
  },
  backgroundWhite: {
    backgroundColor: '#ffffff',
  },
  backgroundGray: {
    backgroundColor: '#ecebf0',
  },
  backgroundBlack: {
    backgroundColor: 'black',
  },
  backgroundDarkGrey: {
    backgroundColor: darkGrey80,
  },
  backgroundDarkGrey10: {
    backgroundColor: darkGrey10,
  },
  backgroundDarkGrey60: {
    backgroundColor: darkGrey60,
  },
  backgroundDarkGrey80: {
    backgroundColor: darkGrey80,
  },
  backgroundRed40: {
    backgroundColor: red40,
  },
  backgroundRed100: {
    backgroundColor: red100,
  },
  backgroundCeruleanBlue: {
    backgroundColor: ceruleanBlue,
  },
  backgroundAccent: {
    backgroundColor: accentColor,
  },
  backgroundPrimary: {
    backgroundColor: primaryColor,
  },
  backgroundKristalBlue: {
    backgroundColor: kristalDetailsBlue,
  },
  backgroundModerateBlue: {
    backgroundColor: moderateBlue,
  },
  backgroundPrimary8percent: {
    backgroundColor: 'rgba(51,122,183,0.08)',
  },
  backgroundLightGrayColor: {
    backgroundColor: lightGrayColor,
  },
  backgroundDarkBlue: {
    backgroundColor: '#192335',
  },
  backgroundDarkBlue2: {
    backgroundColor: darkBlueColor,
  },
  backgroundTextDarkSecondary: {
    backgroundColor: textDarkSecondary,
  },
  backgroundDefaultBlack: {
    backgroundColor: defaultBlack1,
  },
  backgroundKristalGreen: {
    backgroundColor: kristalGreen,
  },
  lightestGrayColorBackground: {
    backgroundColor: lightestGrayColor,
  },
  learnAboutEtfBackground: {
    backgroundColor: learnAboutEtfBackground,
  },
  accountHeaderGreyBackground: {
    backgroundColor: accountHeaderGrey,
  },
  zebraViewGrayBackgroun: {
    backgroundColor: zebraViewGray,
  },
  whiteSmokeBackground: {
    backgroundColor: messageReadBackground,
  },
  modalTransparentBackground: {
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  lightGrayBackGround: {
    backgroundColor: 'rgba(112, 112, 112, 0.074)',
  },
  lightGreyishBlueBackground: {
    backgroundColor: lightGreyishBlue,
  },
  stepperDisableBackground: {
    backgroundColor: stepperDisable,
  },
  backgroundf7grey: {
    backgroundColor: '#f7f7f7',
  },
  backgroundRed: {
    backgroundColor: fundingRed,
  },
  backgroundVeryDarkDesaturatedBlue: {
    backgroundColor: veryDarkDesaturatedBlue,
  },
  backgroundKristalBlue: {
    backgroundColor: kristalBlue80,
  },
  black: {
    color: black,
  },
  almostBlack: {
    color: almostBlack,
  },
  ceruleanBlue: {
    color: ceruleanBlue,
  },
  blueColor: {
    color: blueColor,
  },
  accentColor: {
    color: accentColor,
  },
  darkBlueColor: {
    color: darkBlueColor,
  },
  darkBlueColor2: {
    color: darkBlueColor2,
  },
  whiteColor: {
    color: 'white',
  },
  blackColor: {
    color: 'black',
  },
  backgroundBlueSignature: {
    backgroundColor: zendeskBtnColor,
  },
  buyBackgroundColor: {
    backgroundColor: 'rgba(0, 146, 0, 0.08)',
  },
  verifiedBackgroundColor: {
    backgroundColor: 'rgba(67, 182, 52, 0.08);',
  },
  pendingBackgroundColor: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  blueBackgroundColor: {
    backgroundColor: 'rgba(67, 114, 196, 0.08)',
  },
  veryDarkGreyishBlue: {
    backgroundColor: veryDarkGreyishBlue,
  },
  redColor: {
    color: fundingRed,
  },
  zendeskTicketLinkColor: {
    color: zendeskTicketLinkColor,
  },
  buyBorder: {
    borderColor: 'rgba(0, 146, 0, 0.3)',
    borderWidth: 1,
  },
  verifiedBorder: {
    borderColor: 'rgba(67, 182, 52, 0.27)',
    borderWidth: 1,
  },
  pendingBorder: {
    borderColor: grayColor,
    borderWidth: 1,
  },
  sellBorder: {
    borderColor: 'rgba(231, 76, 60, 0.3)',
    borderWidth: 1,
  },
  kycBorder: {
    borderColor: 'rgba(51,122,183, 0.3)',
    borderWidth: 1,
  },
  steppedRedBorder: {
    borderColor: fundingRed,
    borderWidth: 1,
  },
  stepperGreyBorder: {
    borderColor: lightGrayColor3,
  },
  sellBackgroundColor: {
    backgroundColor: 'rgba(231, 76, 60, 0.08)',
  },
  buyTextColor: {
    color: 'rgba(0, 146, 0, 1)',
  },
  darkLimeGreenColor: {
    color: darkLimeGreen,
  },
  veryDarkGreyishRedColor: {
    color: veryDarkGreyishRed,
  },
  blueTextColor: {
    color: '#4372c4',
  },
  blueBorder: {
    borderColor: '#4372c4',
    borderWidth: 1,
    borderRadius: 4,
  },
  sellTextColor: {
    color: 'rgba(231, 76, 60, 1)',
  },
  darkGrey: {
    color: darkGrey80,
  },
  lightGrayColor: {
    color: lightGrayColor,
  },
  lightGrayColor2: {
    color: lightGrayColor2,
  },
  accountHeaderGrey: {
    color: accountHeaderGrey,
  },
  disabledTextColor: {
    color: disabledTextColor,
  },
  headerBlack: {
    color: headerBlack,
  },
  subHeaderBlack: {
    color: subHeaderBlack,
  },
  defaultBlack1: {
    color: defaultBlack1,
  },
  defaultBlack2: {
    color: defaultBlack2,
  },
  defaultBlack3: {
    color: defaultBlack3,
  },
  black40perColor: {
    color: 'rgba(0,0,0,0.4)',
  },
  black60perColor: {
    color: 'rgba(0,0,0,0.6)',
  },
  textDarkSecondary: {
    color: textDarkSecondary,
  },
  textDarkTernary: {
    color: textDarkTernary,
  },
  successColor: {
    color: 'green',
  },
  errorColor: {
    color: 'red',
  },
  dimGray: {
    color: dimGray,
  },
  lightGray: {
    color: lightGray,
  },
  primaryColor: {
    color: primaryColor,
  },
  moderateBlueLaunchpoint: {
    color: moderateBlueLaunchpoint,
  },
  moderateBlueAccounts: {
    color: moderateBlueAccounts,
  },
  tintPrimaryColor: {
    tintColor: primaryColor,
  },
  tintLighGrayColor: {
    tintColor: lightGrayColor,
  },
  tintFundingGreyColor: {
    tintColor: fundingGrey,
  },
  tintDarkGrey80: {
    tintColor: darkGrey80,
  },
  tintDarkGrey40: {
    tintColor: darkGrey40,
  },
  tintDarkGrey20: {
    tintColor: darkGrey20,
  },
  tintKKristalBlue80: {
    tintColor: kristalBlue80,
  },
  tintKristalDarkYellow: {
    tintColor: kristalDarkYellow,
  },
  tintWhite: {
    tintColor: white,
  },
  fundingGreyColor: {
    color: fundingGrey,
  },
  zendeskBtnColor: {
    color: zendeskBtnColor,
  },
  backgroundFundingGrey: {
    backgroundColor: fundingGrey,
  },
  tintDisabledColor: {
    tintColor: disabledTextColor,
  },
  tintDownloadHeaderColor: {
    tintColor: downloadHeaderColor,
  },
  tintInfoBtnBlueColor: {
    tintColor: tintInfoBtnBlueColor,
  },
  tintDefaultBlack3Color: {
    tintColor: defaultBlack3,
  },
  tintAppBackgroundColor: {
    tintColor: appBackgroundColor,
  },
  tintAlmostBlackColor: {
    tintColor: almostBlack,
  },
  returnValuePositive: {
    color: '#309575',
  },
  returnValueNegative: {
    color: '#DD3307',
  },
  errorText: {
    color: errorTextColor,
  },
  greenText: {
    color: greenTextColor,
  },
  redText: {
    color: highRiskText,
  },
  dashboardSelectedFilterColor: {
    color: dashboardSelectedFilterColor,
  },
  stepperText: {
    color: stepperText,
  },
  lightBlueColor: {
    color: lightBlue,
  },
  greyText: {
    color: greyText,
  },
  noteTitleText: {
    color: noteTitleText,
  },

  // Top header
  topHeader: {
    paddingLeft: sq * 16,
    paddingRight: sq * 16,
    paddingTop: sq * 32,
    paddingBottom: sq * 32,
  },
  topHeaderImage: {
    height: sq * 40,
    width: sq * 40,
  },
  topHeaderIssuerWidth: {
    maxWidth: 120,
  },

  // Height
  height0: {
    height: sq * 0,
  },
  height1: {
    height: sq * 1,
  },
  height2: {
    height: sq * 2,
  },
  height4: {
    height: sq * 4,
  },
  height6: {
    height: sq * 6,
  },
  height12: {
    height: sq * 12,
  },
  height16: {
    height: sq * 16,
  },
  height18: {
    height: sq * 18,
  },
  height22: {
    height: sq * 22,
  },
  height24: {
    height: sq * 24,
  },
  height25: {
    height: sq * 25,
  },
  height28: {
    height: sq * 28,
  },
  height30: {
    height: sq * 30,
  },
  height32: {
    height: sq * 32,
  },
  height36: {
    height: sq * 36,
  },
  height40: {
    height: sq * 40,
  },
  height44: {
    height: sq * 44,
  },
  height46: {
    height: sq * 46,
  },
  height48: {
    height: sq * 48,
  },
  height50: {
    height: sq * 50,
  },
  height52absolute: {
    height: 52,
  },
  height54: {
    height: sq * 54,
  },
  height56: {
    height: sq * 56,
  },
  height58: {
    height: sq * 58,
  },
  height72: {
    height: sq * 72,
  },
  height64: {
    height: sq * 64,
  },
  height68: {
    height: sq * 68,
  },
  height80: {
    height: sq * 80,
  },
  height88: {
    height: sq * 88,
  },
  height100: {
    height: sq * 100,
  },
  height104: {
    height: sq * 104,
  },
  height112: {
    height: sq * 112,
  },
  height129: {
    height: sq * 129,
  },
  height140: {
    height: sq * 140,
  },
  height144: {
    height: sq * 144,
  },
  height147: {
    height: sq * 147,
  },
  height154: {
    height: sq * 154,
  },
  height169: {
    height: sq * 169,
  },
  height173: {
    height: sq * 173,
  },
  height174: {
    height: sq * 174,
  },
  minHeight40: {
    minHeight: sq * 40,
  },
  width200: {
    width: sq * 200,
  },
  width217: {
    width: sq * 217,
  },
  width252: {
    width: sq * 252,
  },
  height230: {
    height: sq * 230,
  },
  height250: {
    height: sq * 250,
  },
  height270: {
    height: sq * 270,
  },
  height300: {
    height: sq * 300,
  },
  height350: {
    height: sq * 350,
  },

  //Width
  width0: {
    width: sq * 0,
  },
  width1: {
    width: sq * 1,
  },
  width6: {
    width: sq * 6,
  },
  width8: {
    width: sq * 8,
  },
  width12: {
    width: sq * 12,
  },
  width16: {
    width: sq * 16,
  },
  width18: {
    width: sq * 18,
  },
  width32: {
    width: sq * 32,
  },
  width100: {
    width: sq * 100,
  },
  width104: {
    width: sq * 104,
  },
  width112: {
    width: sq * 112,
  },
  width125: {
    width: sq * 125,
  },
  width140: {
    width: sq * 140,
  },
  width147: {
    width: sq * 147,
  },
  width164: {
    width: sq * 164,
  },
  width167: {
    width: sq * 167,
  },
  width300: {
    width: sq * 300,
  },
  width343: {
    width: sq * 343,
  },
  width22: {
    width: sq * 22,
  },
  width24: {
    width: sq * 24,
  },
  width25: {
    width: sq * 25,
  },
  width52absolute: {
    width: 52,
  },
  width46: {
    width: sq * 46,
  },
  width54: {
    width: sq * 54,
  },
  width64: {
    width: sq * 64,
  },
  width72: {
    width: sq * 72,
  },
  width80: {
    width: sq * 80,
  },
  width96: {
    width: sq * 96,
  },
  width280: {
    width: sq * 280,
  },
  width40: {
    width: sq * 40,
  },
  width48: {
    width: sq * 48,
  },
  minWidth100: {
    minWidth: sq * 100,
  },

  //no data image
  noDataImage: {
    width: sq * 150,
    height: sq * 150,
  },

  //line height
  lineHeight13: {
    lineHeight: sq * 13,
  },
  lineHeight14: {
    lineHeight: sq * 14,
  },
  lineHeight16: {
    lineHeight: sq * 16,
  },
  lineHeight20: {
    lineHeight: sq * 20,
  },
  lineHeight22: {
    lineHeight: sq * 22,
  },
  lineHeight24: {
    lineHeight: sq * 24,
  },
  lineHeight32: {
    lineHeight: sq * 32,
  },
  lineHeight18: {
    lineHeight: sq * 18,
  },
  lineHeight19: {
    lineHeight: sq * 19,
  },
  lineHeight38: {
    lineHeight: sq * 38,
  },
  lineHeight40: {
    lineHeight: sq * 40,
  },

  flexShrink: {
    flexShrink: 1,
  },

  roundedGreyBorderCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: dashboardCarkBorderCOlor,
  },
  roundedWhiteBorderCard: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
  },

  roundedGreyBorder: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: dashboardCarkBorderCOlor,
  },
  roundedBlueBorder80: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: blueBorderColor80,
    backgroundColor: blueBorderBgColor,
  },
  roundedBlueBorder: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: blueBorderColor,
    backgroundColor: blueBorderBgColor,
  },

  dashboardSelectedFilterTextColor: {
    color: dashboardSelectedFilterColor,
  },

  viewAnalytics: {
    padding: sq * 8,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: dashboardSelectedFilterColor,
    borderColor: dashboardSelectedFilterColor,
  },

  roundedBorderWithBlueBg: {
    borderRadius: 6,
    backgroundColor: blueBorderBgColor,
  },

  roundedTextfield: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: dashboardCarkBorderCOlor,
  },
  submitButton: {
    height: sq * 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardShadow: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2.22,
    elevation: 5,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  kristalLogo: {
    width: sq * 150,
    height: sq * 50,
    resizeMode: 'contain',
  },
  unreadMessagesBadge: {
    position: 'absolute',
    maxHeight: 20,
    top: -4,
    right: -4,
    backgroundColor: 'rgba(255,0,0,0.7)',
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    fontSize: 10,
    fontFamily: 'Acumin Pro Semibold',
    borderRadius: 8,
    color: white,
  },
  zIndex1: {
    zIndex: 1,
  },
  availableCashBtn: {
    backgroundColor: moderateBlue,
    justifyContent: 'center',
    height: sq * 58,
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
  },
  rightArrowGreyInKyc: {
    width: sq * 14,
    height: sq * 14,
  },
  kycApprovedTextBtn: {
    padding: sq * 8,
    borderRadius: sq * 4,
    borderWidth: 1,
    borderColor: 'rgba(67, 182, 52, 0.27)',
    backgroundColor: 'rgba(67, 182, 52, 0.08)',
    marginBottom: sq * 1,
    height: sq * 44,
    width: sq * 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kycNonApprovedTextBtn: {
    padding: sq * 8,
    borderRadius: sq * 4,
    borderWidth: 1,
    borderColor: 'rgba(180, 179, 179, 0.45)',
    backgroundColor: 'rgba(131, 131, 131, 0.06)',
    marginBottom: sq * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rebalanceRiskButton: {
    height: sq * 174,
    resizeMode: 'contain',
    width: (Dimensions.get('window').width - 44) / 2,
  },
  yellowBoxWithShadow: {
    backgroundColor: '#fffde6',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 4,
    borderColor: 'rgba(208, 203, 144, 0.73)',
    borderWidth: 1,
  },
  yellowBox: {
    backgroundColor: '#fffde6',
    borderRadius: 4,
    borderColor: 'rgba(208, 203, 144, 0.73)',
    borderWidth: 1,
  },
  zendeskIcon: {
    width: sq * 24,
    height: sq * 24,
  },
  zendeskBtn: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: zendeskBtnColor,
  },
  zendeskStatusView: {
    height: sq * 23,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: zendeskStatusColor,
    borderColor: zendeskStatusColor,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    // left: 120,
    bottom: 0,
    tintColor: white,
    backgroundColor: kristalBlue80,
  },
  commentViewLeft: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: darkGrey60,
    backgroundColor: darkGrey60,
  },
  commentViewRight: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: kristalDarkYellow,
    backgroundColor: kristalDarkYellow,
  },
  borderRadius14: {
    borderRadius: 14,
  },
  borderColorAlmostBlack: {
    borderWidth: 2,
    borderColor: almostBlack,
  },
  borderColorCeruleanBlue: {
    borderWidth: 2,
    borderColor: ceruleanBlue,
  },

  //v5
  fontLightColor: {
    color: fontLight,
  },
  appBackgroundColor: {
    backgroundColor: appBackgroundColor,
  },
  dashboardCardBorderColor: {
    backgroundColor: dashboardCarkBorderCOlor,
  },
  screenBackground: {
    backgroundColor: backgroundOffWhite,
  },
  backgroundFontLight: {
    backgroundColor: fontLight,
  },
  backgroundTransparent: {
    backgroundColor: 'transparent',
  },
  backgroundChipBlue: {
    backgroundColor: chipBlue,
  },
  backgroundDecisionDialogGrey: {
    backgroundColor: decisionDialogGrey,
  },
  borderChipBlue: {
    borderWidth: 2,
    borderColor: chipBlue,
  },
  textAppBackgroundColor: {
    color: appBackgroundColor,
  },
  textDarkGrey20: {
    color: darkGrey20,
  },
  textDarkGrey40: {
    color: darkGrey40,
  },
  textDarkGrey60: {
    color: darkGrey60,
  },
  textDarkGrey80: {
    color: darkGrey80,
  },
  textLightDarkGrey80: {
    color: lightDarkGrey80,
  },
  textRed100: {
    color: red100,
  },
  textWhite: {
    color: white,
  },
  textOffWhite: {
    color: backgroundOffWhite,
  },
  textKristalBlue80: {
    color: kristalBlue80,
  },
  textKristalBlue60: {
    color: kristalBlue60,
  },
  textKristalDarkYellow: {
    color: kristalDarkYellow,
  },
  textKristalDarkGrey80: {
    color: darkGrey80,
  },
  textKristalDarkGrey60: {
    color: darkGrey60,
  },
  textKristalDarkGrey40: {
    color: darkGrey40,
  },
  textKristalGreen: {
    color: kristalGreen,
  },
  textKristalGreen60: {
    color: green60,
  },
  textDecisionBlue: {
    color: decisionBlue,
  },
  textChipBlue: {
    color: chipBlue,
  },
  boxShadow: {
    shadowColor: boxShadowColor,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  boxShadowReportSeeAllCard: {
    shadowColor: 'rgba(66, 52, 36, 0.12)',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  boxShadowContactUsCard: {
    shadowColor: 'rgba(66, 52, 36, 0.12)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  boxShadowAlpha6: {
    shadowColor: 'rgba(66, 52, 36, 0.06)',
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  boxShadowAlpha3: {
    shadowColor: 'rgba(66, 52, 36, 0.03)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  accountLogoShadow: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 1,
  },
  backgroundKristalBlue80: {
    backgroundColor: kristalBlue80,
  },
  backgroundKristalBlue20: {
    backgroundColor: kristalBlue20,
  },
  backgroundKristalBlue40: {
    backgroundColor: kristalBlue40,
  },
  backgroundDarkGrey20: {
    backgroundColor: darkGrey20,
  },
  backgroundDarkGrey30: {
    backgroundColor: darkGrey30,
  },
  backgroundDisabledCardColor: {
    backgroundColor: disabledCardColor,
  },
  backgroundDisabledSliderColor: {
    backgroundColor: disabledSliderColor,
  },
  backgroundKycDocBkg: {
    backgroundColor: kycDocBkgColor,
  },
  backgroundKycNoteBkg: {
    backgroundColor: kycNoteBkgColor,
  },
  backgroundKristalGreen40: {
    backgroundColor: kristalGreen40,
  },
  borderKristalBlue80: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: kristalBlue80,
  },
  borderSignature: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  crossIcon: {
    width: 14,
    height: 14,
    tintColor: textDarkSecondary,
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  contactCard: {
    backgroundColor: darkGrey80,
    borderRadius: sq * 10,
  },
  positionAbsolute: {
    position: 'absolute',
  },
  mh16: {
    marginHorizontal: sq * 16,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
