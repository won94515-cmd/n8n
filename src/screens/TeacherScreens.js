import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Bar, Card, Pill, Row, styles } from '../components/ui';
import { COLORS, dailyTasks, marketingCalendar, offers, students } from '../data/content';

export function SOP() {
  return <>
    <Card title="Today’s SOP Progress"><Text style={styles.ring}>6/10</Text><Bar value={60} color={COLORS.purple} /><Text style={styles.link}>Submit Weekly Performance Report → Principal</Text></Card>
    <Card title="Daily Checklist">{dailyTasks.map((task, index) => <Row key={task} label={`${index < 6 ? '✓' : '○'} ${task}`} value={index < 6 ? 'Done' : 'Open'} color={index < 6 ? COLORS.green : COLORS.yellow} />)}</Card>
  </>;
}

export function Classroom() {
  return <>
    <Card title="Attendance Panel"><View style={styles.filter}><Pill label="Today" /><Pill label="Batch 12A" /><Pill label="Monthly Logs" /></View><Row label="Present" value="34" color={COLORS.green} /><Row label="Absent" value="5" color={COLORS.red} /><Row label="Late" value="3" color={COLORS.yellow} /><Text style={styles.link}>Mark Attendance</Text></Card>
    <Card title="Exam Results Panel"><Row label="Batch Average" value="78%" /><Row label="Underperforming" value="8 students" color={COLORS.red} /><Text style={styles.copy}>Upload score matrix: Physics, Chemistry, Maths, test date, remarks.</Text></Card>
  </>;
}

export function Students() {
  return <>
    <View style={styles.kpiGrid}>{[['Total', '126'], ['At-Risk', '14'], ['Avg Att.', '84%']].map(([label, value]) => <View style={styles.kpi} key={label}><Text style={styles.kpiNum}>{value}</Text><Text style={styles.muted}>{label}</Text></View>)}</View>
    <TextInput placeholder="Search students..." placeholderTextColor={COLORS.muted} style={styles.input} />
    <View style={styles.filter}>{['All', 'Risk', 'VIP', 'Flagship', 'Entry'].map((tier) => <Pill key={tier} label={tier} />)}</View>
    {students.map((student) => <Card key={student.name} title={`${student.name} · ${student.tier}`} accent={student.status === 'At-Risk' ? COLORS.red : COLORS.green}><Row label="Status" value={student.status} color={student.status === 'At-Risk' ? COLORS.red : COLORS.green} /><Text style={styles.muted}>Attendance</Text><Bar value={student.attendance} color={COLORS.cyan} /><Text style={styles.muted}>Academic Score</Text><Bar value={student.academics} color={student.academics < 60 ? COLORS.red : COLORS.green} /></Card>)}
  </>;
}

export function Revenue() {
  return <Card title="June Collections Gauge"><Row label="Collected" value="₹6.8L / ₹8L" color={COLORS.green} /><Bar value={85} color={COLORS.green} /><Row label="Fees Collected" value="₹6.8L" color={COLORS.green} /><Row label="Fee Pending" value="₹92K" color={COLORS.yellow} /><Row label="Overdue" value="₹28K" color={COLORS.red} /><Text style={styles.link}>+ Add transaction history</Text></Card>;
}

export function Tools() {
  return <>
    <Card title="Pricing · Content · Sales Scripts">{offers.map((offer) => <View key={offer.name} style={styles.offer}><Text style={styles.value}>{offer.name} · {offer.price}</Text><Text style={styles.copy}>{offer.features}</Text><Text style={styles.link}>{offer.hook}</Text></View>)}</Card>
    <Card title="30-Day Marketing Engine">{marketingCalendar.slice(0, 10).map((day, index) => <Text key={day} style={styles.copy}>Day {index + 1}: {day}</Text>)}<Text style={styles.link}>Viral Script: “Your marks are not low because you are weak — your tracking system is weak.” → show dashboard → book diagnostic.</Text></Card>
    <Card title="Discovery Call Close"><Text style={styles.copy}>“Before I suggest any plan, tell me where marks are leaking: concept clarity, silly mistakes, attendance, or test pressure?”</Text><Text style={styles.copy}>“If we solve that with live visual classes, weekly tests, parent updates, and risk alerts, are you ready to reserve the seat today?”</Text></Card>
  </>;
}
