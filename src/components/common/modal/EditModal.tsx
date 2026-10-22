import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { editModalStyles as styles } from '@/styles/common/modal/EditModal.style';

interface EditModalProps {
    /** Título exibido no cabeçalho do modal */
    title: string;
    /** Controla a visibilidade */
    visible: boolean;
    /** Chamado ao fechar (botão ✕ ou toque no overlay) */
    onClose: () => void;
    /** Formulário de edição injetado como filho */
    children: React.ReactNode;
}

/**
 * Modal base reutilizável (bottom-sheet).
 * Recebe o conteúdo de edição via `children` — cada seção da ProjectPage
 * injeta o seu formulário específico.
 */
export default function EditModal({ title, visible, onClose, children }: EditModalProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
            statusBarTranslucent
        >
            {/* Overlay: toca fora para fechar */}
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={onClose}
            >
                {/* KeyboardAvoidingView para que campos não fiquem atrás do teclado */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    {/* O toque dentro do sheet não propaga para o overlay */}
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {}}
                        style={styles.sheet}
                    >
                        {/* Handle visual */}
                        <View style={styles.handle} />

                        {/* Cabeçalho */}
                        <View style={styles.header}>
                            <Text style={styles.title}>{title}</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={onClose}
                                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                            >
                                <Text style={styles.closeButtonText}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Conteúdo scrollável */}
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.content}
                        >
                            {children}
                        </ScrollView>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableOpacity>
        </Modal>
    );
}
