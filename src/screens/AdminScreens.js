import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Bar, Card, Pill, Row, styles } from '../components/ui';
import { COLORS, teachers } from '../data/content';

export function AdminHome() {
  return <>
    <View style={styles.kpiGrid}>{[['Teachers', '3'], ['Students', '126'], ['Revenue', '₹6.8L'], ['At-Risk', '14']].map(([label, value]) => <View style={styles.kpi} key={label}><Text style={styles.kpiNum}>{value}</Text><Text style={styles.muted}>{label}</Text></View>)}</View>
    <Card title="Institute Average Attendance" accent={COLORS.green}><Bar value={84} color={COLORS.green} /><Text style={styles.copy}>84% live attendance. Alert Principal if any batch drops below 70%.</Text></Card>
    <Card title="Manager SOP Snapshot"><Text style={styles.copy}>Payment success → Razorpay webhook → student CRM record → LMS classroom invite → WhatsApp onboarding pack → parent welcome message.</Text><Text style={styles.copy}>Weekly: attendance scan, low-score flags, parent PDF update, teacher report review, renewal follow-up.</Text></Card>
  </>;
}

export function Teachers() {
  return <Card title="Manage Teachers + Credential Sharing">
    {teachers.map((teacher) => <View style={styles.teacher} key={teacher.name}><Text style={styles.avatar}>{teacher.initials}</Text><View style={{ flex: 1 }}><Text style={styles.value}>{teacher.name}</Text><Text style={styles.muted}>{teacher.subject} · Joined {teacher.joined} · Password {teacher.password} 👁</Text><Text style={styles.link}>Share via WhatsApp · Email · Delete</Text></View></View>)}
    <TouchableOpacity style={styles.fab}><Text style={styles.fabText}>+ Add Teacher</Text></TouchableOpacity>
  </Card>;
}

export function Reports() {
  return <>
    <Card title="Faculty Weekly Submissions"><Row label="Total Reports" value="18" /><Row label="Total Classes" value="54" /><Row label="Average Performance" value="4.6 / 5" color={COLORS.green} /><View style={styles.filter}><Pill label="All" /><Pill label="Physics" /><Pill label="Maths" /></View></Card>
    <Card title="Expandable Weekly Card: Ananya"><Row label="Classes Conducted" value="16 / 18" /><Row label="Attendance" value="72%" color={COLORS.yellow} /><Bar value={72} color={COLORS.yellow} /><Row label="Feedback" value="4.7 / 5" /></Card>
  </>;
}

export function Broadcast() {
  return <Card title="Announcements"><View style={styles.filter}><Pill label="Urgent 3" color={COLORS.red} /><Pill label="Normal 9" color={COLORS.cyan} /></View><TextInput placeholder="Create announcement..." placeholderTextColor={COLORS.muted} style={styles.input} /><Text style={styles.copy}>URGENT · Sunday test moved to 7 PM · Delete</Text><Text style={styles.copy}>NORMAL · Upload recordings before 10 PM · Delete</Text></Card>;
}

export function Security() {
  return <Card title="Admin Settings & Security"><Row label="Master Security Key" value="•••••••• 👁 Edit" /><TextInput placeholder="Current admin password" placeholderTextColor={COLORS.muted} style={styles.input} /><TextInput placeholder="New password · min 6 characters" placeholderTextColor={COLORS.muted} style={styles.input} /><TextInput placeholder="Confirm new password" placeholderTextColor={COLORS.muted} style={styles.input} /><Text style={styles.muted}>Version 1.0.0 · Build for Expo Web + Vercel</Text></Card>;
}

