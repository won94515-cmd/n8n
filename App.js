 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/App.js b/App.js
new file mode 100644
index 0000000000000000000000000000000000000000..99f6323e5daa859f3524ab0da5645c2544e2d8c1
--- /dev/null
+++ b/App.js
@@ -0,0 +1,44 @@
+import React, { useMemo, useState } from 'react';
+import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
+import { StatusBar } from 'expo-status-bar';
+import { Pill, styles } from './src/components/ui';
+import { COLORS } from './src/data/content';
+import { AdminHome, Broadcast, Reports, Security, Teachers } from './src/screens/AdminScreens';
+import { Classroom, Revenue, SOP, Students, Tools } from './src/screens/TeacherScreens';
+
+const screens = {
+  Dashboard: <AdminHome />,
+  Teachers: <Teachers />,
+  Reports: <Reports />,
+  Broadcast: <Broadcast />,
+  Security: <Security />,
+  SOP: <SOP />,
+  Classroom: <Classroom />,
+  Students: <Students />,
+  Revenue: <Revenue />,
+  Tools: <Tools />,
+};
+
+export default function App() {
+  const [role, setRole] = useState('Admin');
+  const [tab, setTab] = useState('Dashboard');
+  const nav = role === 'Admin' ? ['Dashboard', 'Teachers', 'Reports', 'Broadcast', 'Security'] : ['SOP', 'Classroom', 'Students', 'Revenue', 'Tools'];
+  const screen = useMemo(() => screens[tab], [tab]);
+
+  function switchRole(nextRole, firstTab) {
+    setRole(nextRole);
+    setTab(firstTab);
+  }
+
+  return <SafeAreaView style={styles.safe}>
+    <StatusBar style="light" />
+    <View style={styles.auth}><Text style={styles.logo}>EduOps Command</Text><Pill label={`Secure ${role} Session`} color={COLORS.green} /></View>
+    <View style={styles.login}>
+      <TouchableOpacity onPress={() => switchRole('Admin', 'Dashboard')} style={[styles.role, role === 'Admin' && styles.activeRole]}><Text style={styles.roleText}>Principal/Admin + 3rd Key</Text></TouchableOpacity>
+      <TouchableOpacity onPress={() => switchRole('Teacher', 'SOP')} style={[styles.role, role === 'Teacher' && styles.activeRole]}><Text style={styles.roleText}>Teacher Login · Remember Me</Text></TouchableOpacity>
+    </View>
+    <View style={styles.toast}><Text style={styles.toastText}>Global Toast: realtime sync online · WhatsApp + Email triggers armed</Text></View>
+    <ScrollView contentContainerStyle={styles.content}>{screen}</ScrollView>
+    <View style={styles.nav}>{nav.map((item) => <TouchableOpacity key={item} onPress={() => setTab(item)} style={[styles.navItem, tab === item && styles.navActive]}><Text style={styles.navText}>{item}</Text></TouchableOpacity>)}</View>
+  </SafeAreaView>;
+}
 
EOF
)
