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
import { editModalStyles } from '@/styles/common/modal/EditModal.style';

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
                style={editModalStyles.overlay}
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
                        onPress={() => { }}
                        style={editModalStyles.sheet}
                    >
                        {/* Handle visual */}
                        <View style={editModalStyles.handle} />

                        {/* Cabeçalho */}
                        <View style={editModalStyles.header}>
                            <Text style={editModalStyles.title}>{title}</Text>
                            <TouchableOpacity
                                style={editModalStyles.closeButton}
                                onPress={onClose}
                                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                            >
                                <Text style={editModalStyles.closeButtonText}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Conteúdo scrollável */}
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={editModalStyles.content}
                        >
                            {children}
                        </ScrollView>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableOpacity>
        </Modal>
    );
}
