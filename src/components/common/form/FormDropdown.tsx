import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { formStyles as styles } from '@/styles/common/modal/EditForm.style';
import { DefaultBackdropContainer, DefaultMenuContainer } from '@/styles/common/form/FormDropdown.style';

export interface DropdownOption<T extends string = string> {
    key: T;
    label: string;
}

interface FormDropdownProps<T extends string = string> {
    label: string;
    placeholder?: string;
    options: DropdownOption<T>[];
    value: T | null;
    onChange: (value: T) => void;
}

export default function FormDropdown<T extends string = string>({
    label,
    placeholder = 'Selecione...',
    options,
    value,
    onChange,
}: FormDropdownProps<T>) {
    const [open, setOpen] = useState(false);

    const selectedLabel = options.find((o) => o.key === value)?.label;

    return (
        <View style={styles.fieldGroup}>
            <Text style={styles.label}>{label}</Text>

            <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setOpen(true)}
                activeOpacity={0.75}
            >
                <Text
                    style={
                        selectedLabel
                            ? styles.dropdownButtonText
                            : styles.dropdownButtonPlaceholder
                    }
                >
                    {selectedLabel ?? placeholder}
                </Text>
                <Text style={styles.dropdownArrow}>{open ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            <Modal
                visible={open}
                transparent
                animationType="fade"
                onRequestClose={() => setOpen(false)}
            >
                {/* Overlay para fechar ao clicar fora */}
                <TouchableOpacity
                    style={DefaultBackdropContainer}
                    activeOpacity={1}
                    onPress={() => setOpen(false)}
                >
                    <View style={DefaultMenuContainer}>
                        <View style={styles.dropdownMenu}>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item.key}
                                scrollEnabled={options.length > 6}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={[
                                            styles.dropdownItem,
                                            item.key === value && styles.dropdownItemSelected,
                                            index === options.length - 1 && {
                                                borderBottomWidth: 0,
                                            },
                                        ]}
                                        onPress={() => {
                                            onChange(item.key);
                                            setOpen(false);
                                        }}
                                        activeOpacity={0.7}
                                    >
                                        <Text
                                            style={[
                                                styles.dropdownItemText,
                                                item.key === value &&
                                                styles.dropdownItemTextSelected,
                                            ]}
                                        >
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}
