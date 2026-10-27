import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { formStyles } from '@/styles/common/form/EditForm.style';
import { formDropdownStyle } from '@/styles/common/form/FormDropdown.style';

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
        <View style={formStyles.fieldGroup}>
            <Text style={formStyles.label}>{label}</Text>

            <TouchableOpacity
                style={formStyles.dropdownButton}
                onPress={() => setOpen(true)}
                activeOpacity={0.75}
            >
                <Text
                    style={
                        selectedLabel
                            ? formStyles.dropdownButtonText
                            : formStyles.dropdownButtonPlaceholder
                    }
                >
                    {selectedLabel ?? placeholder}
                </Text>
                <Text style={formStyles.dropdownArrow}>{open ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            <Modal
                visible={open}
                transparent
                animationType="fade"
                onRequestClose={() => setOpen(false)}
            >
                {/* Overlay para fechar ao clicar fora */}
                <TouchableOpacity
                    style={formDropdownStyle.backdrop}
                    activeOpacity={1}
                    onPress={() => setOpen(false)}
                >
                    <View style={formDropdownStyle.menuWrapper}>
                        <View style={formStyles.dropdownMenu}>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item.key}
                                scrollEnabled={options.length > 6}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={[
                                            formStyles.dropdownItem,
                                            item.key === value && formStyles.dropdownItemSelected,
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
                                                formStyles.dropdownItemText,
                                                item.key === value &&
                                                formStyles.dropdownItemTextSelected,
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
