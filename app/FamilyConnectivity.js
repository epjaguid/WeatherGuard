import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';

const FamilyConnectivity = () => {
  const navigation = useNavigation();
  const [familyMembers, setFamilyMembers] = useState([
    { name: 'Maddi', email: 'maambong.christianrey@gmail.com', isSelf: true },
    { name: 'Ethyl', email: 'ethyl@gmail.com' },
  ]);
  const [selectedTab, setSelectedTab] = useState('family');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');

  const handleRegisterFamily = () => {
    setIsModalVisible(true);
  };

  const handleAddMember = () => {
    if (newMemberName.trim() === '') {
      Alert.alert('Error', 'Please enter a valid name.');
      return;
    }

    const newMember = { name: newMemberName, email: '', isSelf: false }; // Email is optional
    setFamilyMembers([...familyMembers, newMember]);

    // Reset modal and input field
    setNewMemberName('');
    setIsModalVisible(false);

    console.log('New family member added:', newMember);
  };

  return (
    <View style={styles.container}>
      <GradientBackground>
        {/* First Rectangle: Register Family */}
        <View style={styles.registerFamilyContainer}>
          <TouchableOpacity
            style={styles.registerFamilyButton}
            onPress={handleRegisterFamily}
          >
            <Text style={styles.registerText}>
              Register a family (1 member slot left)
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Modal for adding a family member */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Add Family Member</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter family member's name"
                placeholderTextColor="#AAA"
                value={newMemberName}
                onChangeText={setNewMemberName}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleAddMember}
                >
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Second Rectangle: Family Members */}
        <View style={styles.familyMembersContainer}>
          <Text style={styles.sectionTitle}>Family Members</Text>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {familyMembers.map((member, index) => (
              <View key={index} style={styles.memberCard}>
                <View>
                  <Text style={styles.memberName}>
                    {member.name} {member.isSelf ? '(You)' : ''}
                  </Text>
                  <Text style={styles.memberEmail}>{member.email}</Text>
                </View>
                <View style={styles.memberActions}>
                  <TouchableOpacity>
                    <Ionicons name="pencil" size={18} color="#FFF" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="trash" size={18} color="#FFF" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Third Rectangle: See Family Locations */}
        <View style={styles.locationsContainer}>
          <TouchableOpacity
            style={styles.locationsButton}
            onPress={() => alert('See family locations!')}
          >
            <Text style={styles.locationsText}>See family locations</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Fourth Rectangle: Mark Yourself Safe */}
        <View style={styles.markSafeContainer}>
          <TouchableOpacity
            style={styles.markSafeButton}
            onPress={() => alert('Marking yourself safe!')}
          >
            <Text style={styles.markSafeText}>Mark yourself safe</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </GradientBackground>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Ionicons
            name="home"
            size={24}
            color={selectedTab === 'home' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('map')}>
          <Ionicons
            name="map"
            size={24}
            color={selectedTab === 'map' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FamilyConnectivity')}>
          <Ionicons
            name="people"
            size={24}
            color={selectedTab === 'family' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Ionicons
            name="notifications"
            size={24}
            color={selectedTab === 'alerts' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu"
            size={24}
            color={selectedTab === 'menu' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2B48',
  },
  registerFamilyContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: '#2B3E6C',
    borderRadius: 10,
  },
  registerFamilyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  registerText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  familyMembersContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: '#2B3E6C',
    borderRadius: 10,
    height: '40%',
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    paddingBottom: 10,
  },
  memberCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3B4C7D',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  memberName: {
    color: '#FFC107',
    fontSize: 16,
  },
  memberEmail: {
    color: '#FFF',
    fontSize: 14,
  },
  memberActions: {
    flexDirection: 'row',
    gap: 10,
  },
  locationsContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: '#2B3E6C',
    borderRadius: 10,
  },
  locationsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationsText: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
  },
  markSafeContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: '#2B3E6C',
    borderRadius: 10,
  },
  markSafeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  markSafeText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A2B48',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  // New modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#2B3E6C',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1844A5',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#AAA',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default FamilyConnectivity;
