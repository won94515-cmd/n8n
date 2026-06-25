import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../data/content';

export function Pill({ label, color = COLORS.soft }) {
  return <View style={[styles.pill, { borderColor: color }]}><Text style={styles.pillText}>{label}</Text></View>;
}

export function Card({ title, children, accent = COLORS.cyan }) {
  return <View style={[styles.card, { borderTopColor: accent }]}><Text style={styles.cardTitle}>{title}</Text>{children}</View>;
}

export function Bar({ value, color }) {
  return <View style={styles.barTrack}><View style={[styles.barFill, { width: `${value}%`, backgroundColor: color }]} /></View>;
}

export function Row({ label, value, color = COLORS.text }) {
  return <View style={styles.row}><Text style={styles.label}>{label}</Text><Text style={[styles.value, { color }]}>{value}</Text></View>;
}

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  auth: { padding: 16, paddingTop: 22, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { color: COLORS.text, fontSize: 22, fontWeight: '900' },
  login: { flexDirection: 'row', gap: 10, paddingHorizontal: 16 },
  role: { flex: 1, backgroundColor: COLORS.panel, borderRadius: 16, padding: 12, borderWidth: 1, borderColor: COLORS.soft },
  activeRole: { borderColor: COLORS.cyan, backgroundColor: '#0B2435' },
  roleText: { color: COLORS.text, fontWeight: '700', fontSize: 12 },
  toast: { margin: 16, marginBottom: 8, padding: 10, borderRadius: 14, backgroundColor: '#11251C', borderColor: COLORS.green, borderWidth: 1 },
  toastText: { color: COLORS.green, fontSize: 12 },
  content: { padding: 16, paddingBottom: 96 },
  nav: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#0B0F1C', flexDirection: 'row', padding: 8, borderTopWidth: 1, borderTopColor: COLORS.soft },
  navItem: { flex: 1, padding: 8, borderRadius: 12, alignItems: 'center' },
  navActive: { backgroundColor: COLORS.soft },
  navText: { color: COLORS.text, fontSize: 10, fontWeight: '800' },
  kpiGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  kpi: { flexGrow: 1, minWidth: '45%', backgroundColor: COLORS.card, borderRadius: 18, padding: 16, borderWidth: 1, borderColor: COLORS.soft },
  kpiNum: { color: COLORS.text, fontSize: 26, fontWeight: '900' },
  muted: { color: COLORS.muted, fontSize: 12, marginTop: 4 },
  card: { backgroundColor: COLORS.card, borderRadius: 22, padding: 16, marginTop: 14, borderWidth: 1, borderColor: COLORS.soft, borderTopWidth: 4 },
  cardTitle: { color: COLORS.text, fontSize: 18, fontWeight: '900', marginBottom: 12 },
  copy: { color: COLORS.text, lineHeight: 21, marginBottom: 8 },
  label: { color: COLORS.muted, flex: 1 },
  value: { color: COLORS.text, fontWeight: '900' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#222B42' },
  barTrack: { height: 12, backgroundColor: '#283149', borderRadius: 999, overflow: 'hidden', marginVertical: 10 },
  barFill: { height: '100%', borderRadius: 999 },
  pill: { borderRadius: 999, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, backgroundColor: '#121A2B' },
  pillText: { color: COLORS.text, fontSize: 11, fontWeight: '800' },
  filter: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginVertical: 8 },
  teacher: { flexDirection: 'row', gap: 12, alignItems: 'center', paddingVertical: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.purple, color: COLORS.text, textAlign: 'center', lineHeight: 44, fontWeight: '900' },
  link: { color: COLORS.cyan, fontWeight: '900', marginTop: 6 },
  fab: { backgroundColor: COLORS.cyan, borderRadius: 16, padding: 14, alignItems: 'center', marginTop: 10 },
  fabText: { color: '#00121A', fontWeight: '900' },
  input: { backgroundColor: COLORS.panel, borderRadius: 14, borderWidth: 1, borderColor: COLORS.soft, color: COLORS.text, padding: 12, marginVertical: 8 },
  ring: { alignSelf: 'center', width: 118, height: 118, borderRadius: 59, borderWidth: 12, borderColor: COLORS.purple, color: COLORS.text, textAlign: 'center', lineHeight: 94, fontSize: 28, fontWeight: '900' },
  offer: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#222B42' },
});
